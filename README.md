# Zuha Irfan — portfolio

The existing React portfolio, redesigned around an editorial lavender identity. All nine primary routes and all six project case studies are preserved.

## Run locally

Requires Node.js 22.12+.

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

```sh
npm run lint
npm run build
npm run preview
```

The contact form sends submissions through FormSubmit to `zuhairfan99@gmail.com`. FormSubmit may send an activation email to the recipient address the first time the form is submitted; verify that email to enable delivery.

## Design and motion

- `src/design.css`: shared colors, typography, layouts, responsive rules, print styles, and ambient animation.
- `src/components/MotionSystem.tsx`: scoped GSAP/ScrollTrigger reveals, text masks, timeline progress, Lenis synchronization, magnetic interaction, pointer tilt, cursor, and session intro.
- `src/components/PageTransition.tsx`: route curtains and destination heading focus.
- `src/context/RouterContext.tsx`: existing router, with per-history-entry scroll restoration and hash fallback.
- Motion timelines, listeners, and the Lenis ticker clean up on unmount. Reduced motion disables smooth scrolling, cursor, parallax, and animation. Touch devices use native scrolling and no custom cursor.
- Native modal dialogs provide background inertness; shared keyboard handling keeps focus inside and restores the trigger on close.
- Secondary pages load as separate chunks.

The Lenis ticker follows its [official GSAP integration](https://github.com/darkroomengineering/lenis#gsap-scrolltrigger). Responsive animation scopes use [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

## Portfolio content

Edit the existing data modules in `src/data/`. Biography, projects, experience, education, skills, and certification data remain there.

The supplied portrait is shown on the About page, and the certificate scans are displayed in the Certifications archive. Project interfaces remain code-rendered illustrations, labeled as concepts; chart illustrations do not represent measured results.

Before publishing, verify the contact information, education institution names, and credential links. The three uploaded resume PDFs are linked from `profileData.resumes`.

The contact form validates all four fields and submits through FormSubmit. A success message is shown only after the service confirms it accepted the submission.

## Browser verification

Start the dev server, then:

```sh
npx playwright install chromium
node scripts/verify.mjs
```

Checks all 14 content routes at 375, 430, 768, 1024, 1280, 1440, and 1920px. Also checks project filters, modal focus and Escape, mobile navigation, resume selection, contact validation, missing routes, back/forward scroll restoration, and reduced-motion cleanup.

Screenshots, desktop/mobile contact sheets, and a JSON report are saved to `artifacts/review/`.
