import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

export interface RouteMatch {
  path: string;
  params: Record<string, string>;
}

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
  matchRoute: (pattern: string) => RouteMatch | null;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePath(rawPath: string): string {
  // Support hash routing fallback if served from file or static subpath
  let path = rawPath;
  if (path.includes('#/')) {
    path = path.split('#')[1] || '/';
  }
  // Strip trailing slash except for root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path || '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pendingScroll = useRef<number | null>(null);
  const positions = useRef(new Map<string, number>());
  const historyKey = useRef(window.history.state?.portfolioKey || 'initial');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        return normalizePath(window.location.hash);
      }
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.history.replaceState({ ...window.history.state, portfolioKey: historyKey.current }, '', window.location.href);
    const onPageReady = () => {
      if (pendingScroll.current === null) return;
      window.scrollTo({ top: pendingScroll.current, behavior: 'instant' });
      window.dispatchEvent(new Event('portfolio:scroll'));
      pendingScroll.current = null;
    };
    window.addEventListener('portfolio:page-ready', onPageReady);
    const handlePopState = () => {
      positions.current.set(historyKey.current, window.scrollY);
      historyKey.current = window.history.state?.portfolioKey || window.location.href;
      pendingScroll.current = positions.current.get(historyKey.current) || 0;
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(normalizePath(window.location.hash));
      } else {
        setCurrentPath(normalizePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.history.scrollRestoration = previousRestoration;
      window.removeEventListener('portfolio:page-ready', onPageReady);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    const cleanTo = normalizePath(to);
    const existing = window.location.hash.startsWith('#/') ? normalizePath(window.location.hash) : normalizePath(window.location.pathname);
    if (cleanTo === existing) return;
    positions.current.set(historyKey.current, window.scrollY);
    historyKey.current = `${Date.now()}-${Math.random()}`;
    pendingScroll.current = 0;
    
    // Update browser history
    if (typeof window !== 'undefined') {
      // Use pushState
      try {
        window.history.pushState({ portfolioKey: historyKey.current }, '', cleanTo);
      } catch {
        // Fallback to hash if pushState fails in iframe sandbox
        window.location.hash = `#${cleanTo}`;
      }
    }

    setCurrentPath(cleanTo);
  }, []);

  const matchRoute = useCallback(
    (pattern: string): RouteMatch | null => {
      // Normalize
      const patternParts = pattern.split('/').filter(Boolean);
      const currentParts = currentPath.split('/').filter(Boolean);

      if (patternParts.length !== currentParts.length) {
        return null;
      }

      const params: Record<string, string> = {};

      for (let i = 0; i < patternParts.length; i++) {
        const pPart = patternParts[i];
        const cPart = currentParts[i];

        if (pPart.startsWith(':')) {
          const paramName = pPart.slice(1);
          try { params[paramName] = decodeURIComponent(cPart); } catch { return null; }
        } else if (pPart !== cPart) {
          return null;
        }
      }

      return { path: currentPath, params };
    },
    [currentPath]
  );

  return (
    <RouterContext.Provider value={{ currentPath, navigate, matchRoute }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();

  const isCurrent = exact
    ? currentPath === to
    : to === '/'
    ? currentPath === '/'
    : currentPath.startsWith(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Only handle standard left clicks without modifier keys
    if (!e.defaultPrevented && (!props.target || props.target === '_self') && !props.download && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isCurrent ? activeClassName : ''}`.trim()}
      aria-current={isCurrent ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
