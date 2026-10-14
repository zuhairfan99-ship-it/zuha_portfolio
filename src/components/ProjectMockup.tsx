import React from 'react';
import { 
  Waves, 
  Wind, 
  HeartPulse, 
  Building2, 
  Workflow, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Users,
  BarChart3
} from 'lucide-react';

interface ProjectMockupProps {
  slug: string;
  category?: string;
  title?: string;
  variant?: 'card' | 'hero' | 'gallery';
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  slug,
  variant = 'card',
  className = '',
}) => {
  const isHero = variant === 'hero';

  // Render project specific visual mockup
  if (slug === 'flood-prediction-system') {
    return (
      <div
        className={`project-mockup relative w-full overflow-hidden bg-gradient-to-br from-[#1F1B2D] to-[#2D2740] rounded-2xl p-4 sm:p-6 text-white border border-[#8B5CF6]/20 shadow-inner flex flex-col justify-between ${
          isHero ? 'min-h-[360px] sm:min-h-[440px]' : 'min-h-[220px] sm:min-h-[260px]'
        } ${className}`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-white/50 font-mono ml-2">flood_prediction_core.py</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/20 px-2.5 py-1 rounded-full text-xs text-purple-200 border border-purple-400/30">
            <Waves className="w-3.5 h-3.5" />
            <span>Basin Telemetry Active</span>
          </div>
        </div>

        {/* Center telemetry */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-auto py-3">
          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/5">
            <span className="text-[11px] text-white/60 block">River Discharge</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-[#7DD3FC]">482 m³/s</span>
            <span className="text-[10px] text-amber-300 block mt-1">▲ +14% vs 24h baseline</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/5">
            <span className="text-[11px] text-white/60 block">Soil Saturation</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-[#A78BFA]">84.6%</span>
            <span className="text-[10px] text-purple-300 block mt-1">Threshold critical</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/5 col-span-2 sm:col-span-1">
            <span className="text-[11px] text-white/60 block">24h Risk Forecast</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">Moderate</span>
            <span className="text-[10px] text-white/60 block mt-1">Confidence 91.2%</span>
          </div>
        </div>

        {/* Bottom wave visual */}
        <div className="relative pt-2">
          <div className="flex items-center justify-between text-xs text-white/50 mb-1 font-mono">
            <span>Historical Inundation Horizon</span>
            <span>PyTorch Recurrent Cell</span>
          </div>
          <div className="h-10 sm:h-14 w-full flex items-end gap-1 sm:gap-1.5 opacity-80">
            {[32, 45, 38, 56, 72, 85, 90, 78, 64, 52, 48, 60, 75, 68, 55, 42, 38].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-sm transition-all duration-300 ${
                  h > 70 ? 'bg-gradient-to-t from-purple-500 to-red-400' : 'bg-gradient-to-t from-purple-600/40 to-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'air-quality-prediction-system') {
    return (
      <div
        className={`project-mockup relative w-full overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] rounded-2xl p-4 sm:p-6 text-white border border-[#60A5FA]/20 shadow-inner flex flex-col justify-between ${
          isHero ? 'min-h-[360px] sm:min-h-[440px]' : 'min-h-[220px] sm:min-h-[260px]'
        } ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-xs text-white/70 font-mono">AQI_Forecasting_Ensemble</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            Real-time Sensor Ingestion
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-auto py-2">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-amber-400/80 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xs shadow-lg shadow-amber-500/10">
              <Wind className="w-4 h-4 text-amber-300 mb-0.5" />
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">138</span>
              <span className="text-[9px] uppercase tracking-wider text-amber-300 font-semibold">Moderate</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-white/60">Primary Pollutant</span>
              <p className="text-base font-bold text-white">PM2.5 (54.2 µg/m³)</p>
              <p className="text-xs text-white/70">Unhealthy for sensitive groups</p>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-white/5 rounded-xl p-3 border border-white/10 space-y-1.5 text-xs">
            <div className="flex justify-between gap-6">
              <span className="text-white/60">PM10 Level:</span>
              <span className="font-mono text-[#7DD3FC]">88 µg/m³</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-white/60">Humidity:</span>
              <span className="font-mono text-[#A78BFA]">62%</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-white/60">Wind Vector:</span>
              <span className="font-mono text-emerald-300">11.4 km/h NNE</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-white/50 font-mono">
          <span>Ensemble Regression • R² = 0.89</span>
          <span>Atmospheric Model</span>
        </div>
      </div>
    );
  }

  if (slug === 'heart-disease-detection-system') {
    return (
      <div
        className={`project-mockup relative w-full overflow-hidden bg-gradient-to-br from-[#1E1B2E] to-[#2B1B2D] rounded-2xl p-4 sm:p-6 text-white border border-[#F43F5E]/20 shadow-inner flex flex-col justify-between ${
          isHero ? 'min-h-[360px] sm:min-h-[440px]' : 'min-h-[220px] sm:min-h-[260px]'
        } ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-mono text-rose-200">Clinical_Informatics_ML</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30">
            High-Sensitivity Recall
          </span>
        </div>

        {/* ECG Wave */}
        <div className="my-auto py-2">
          <div className="flex items-center justify-between text-xs text-white/60 mb-2">
            <span>Electrophysiological Telemetry</span>
            <span className="font-mono text-rose-300">72 BPM Normal Sinus</span>
          </div>
          <div className="h-16 w-full relative flex items-center bg-black/30 rounded-xl px-3 border border-white/5 overflow-hidden">
            <svg className="w-full h-12 text-rose-400" viewBox="0 0 400 60" fill="none">
              <path
                d="M0 30 L60 30 L75 10 L85 50 L95 20 L105 35 L120 30 L200 30 L215 10 L225 50 L235 20 L245 35 L260 30 L340 30 L355 10 L365 50 L375 20 L385 35 L400 30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-white/50 block text-[10px]">Resting BP</span>
            <span className="font-mono font-bold text-white">124/82</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-white/50 block text-[10px]">Cholesterol</span>
            <span className="font-mono font-bold text-white">194 mg/dL</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-white/50 block text-[10px]">F1 Score</span>
            <span className="font-mono font-bold text-emerald-400">0.88</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'smart-campus-resource-management-system') {
    return (
      <div
        className={`project-mockup relative w-full overflow-hidden bg-gradient-to-br from-[#F6F1FF] to-[#EDE9FE] rounded-2xl p-4 sm:p-6 text-[#1F1B2D] border border-[#8B5CF6]/25 shadow-inner flex flex-col justify-between ${
          isHero ? 'min-h-[360px] sm:min-h-[440px]' : 'min-h-[220px] sm:min-h-[260px]'
        } ${className}`}
      >
        <div className="flex items-center justify-between border-b border-[#8B5CF6]/15 pb-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-xs font-semibold text-[#1F1B2D]">SmartCampus Hub</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white text-[#7C3AED] font-medium border border-[#8B5CF6]/20 shadow-2xs">
            Lab Allocations
          </span>
        </div>

        <div className="space-y-2.5 my-auto py-2">
          <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-[#8B5CF6]/20 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-[#8B5CF6]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F1B2D]">Software Eng Lab 3</p>
                <p className="text-[11px] text-[#6B6478]">40 Workstations • Projector</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Reserved 10:00–12:00
            </span>
          </div>

          <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-[#8B5CF6]/20 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F1B2D]">Seminar Hall B</p>
                <p className="text-[11px] text-[#6B6478]">Capacity 120 • Audio Array</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
              Available
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#8B5CF6]/15 flex items-center justify-between text-xs text-[#6B6478]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Zero Scheduling Collisions
          </span>
          <span className="font-mono text-[11px]">MySQL Relational Schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'workflow-automation-pipeline') {
    return (
      <div
        className={`project-mockup relative w-full overflow-hidden bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-4 sm:p-6 text-white border border-[#A78BFA]/20 shadow-inner flex flex-col justify-between ${
          isHero ? 'min-h-[360px] sm:min-h-[440px]' : 'min-h-[220px] sm:min-h-[260px]'
        } ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-[#A78BFA]" />
            <span className="text-xs font-mono text-purple-200">Pipeline_Orchestrator</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
            Event-Driven Webhooks
          </span>
        </div>

        <div className="space-y-2 my-auto py-2">
          <div className="flex items-center justify-between gap-2 text-xs">
            <div className="flex-1 bg-white/5 rounded-lg p-2.5 border border-white/10 text-center">
              <span className="text-white/50 block text-[10px]">Webhook Ingest</span>
              <span className="font-mono font-semibold text-[#7DD3FC]">Payload JSON</span>
            </div>
            <span className="text-purple-400">→</span>
            <div className="flex-1 bg-white/5 rounded-lg p-2.5 border border-purple-400/30 text-center bg-purple-500/10">
              <span className="text-purple-300 block text-[10px]">Validation Rule</span>
              <span className="font-mono font-semibold text-white">Schema Pass</span>
            </div>
            <span className="text-purple-400">→</span>
            <div className="flex-1 bg-white/5 rounded-lg p-2.5 border border-white/10 text-center">
              <span className="text-white/50 block text-[10px]">DB Sync</span>
              <span className="font-mono font-semibold text-emerald-400">Committed</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs">
            <span className="text-white/70 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Auto-Retry Mechanic Active
            </span>
            <span className="font-mono text-[#A78BFA]">Latency: 142ms</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-white/50 font-mono">
          <span>Automated Operations</span>
          <span>Zero Data Loss Pipeline</span>
        </div>
      </div>
    );
  }

  // Default / UI/UX Companion Case Study
  return (
    <div
      className={`project-mockup relative w-full overflow-hidden bg-gradient-to-br from-[#FAF8FF] via-[#F6F1FF] to-[#EDE9FE] rounded-2xl p-4 sm:p-6 text-[#1F1B2D] border border-[#8B5CF6]/25 shadow-inner flex flex-col justify-between ${
        isHero ? 'min-h-[360px] sm:min-h-[440px]' : 'min-h-[220px] sm:min-h-[260px]'
      } ${className}`}
    >
      {/* Top chrome */}
      <div className="flex items-center justify-between border-b border-[#8B5CF6]/15 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-xs font-bold text-[#1F1B2D]">Student Study Companion</span>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#8B5CF6] text-white font-medium shadow-xs">
          WCAG AA Design System
        </span>
      </div>

      {/* Interface card preview */}
      <div className="space-y-2.5 my-auto py-2">
        <div className="bg-white rounded-2xl p-3.5 border border-[#8B5CF6]/20 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#1F1B2D]">Today's Academic Priority</span>
            <span className="text-[10px] text-[#8B5CF6] bg-[#EDE9FE] px-2 py-0.5 rounded-full font-medium">
              3 Tasks Due
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs p-1.5 bg-[#FAF8FF] rounded-lg border border-[#8B5CF6]/10">
              <span className="font-medium text-[#1F1B2D]">OS Lab: Concurrency Module</span>
              <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Due 5:00 PM</span>
            </div>
            <div className="flex items-center justify-between text-xs p-1.5 bg-[#FAF8FF] rounded-lg border border-[#8B5CF6]/10">
              <span className="font-medium text-[#1F1B2D]">UI/UX Wireframes Review</span>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
            </div>
          </div>
        </div>

        {/* Small floating chips */}
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-white/90 rounded-xl p-2 border border-[#8B5CF6]/15 text-center">
            <span className="text-[10px] text-[#6B6478] block">Focus Interval</span>
            <span className="text-xs font-bold text-[#8B5CF6] flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" /> 45 mins
            </span>
          </div>
          <div className="flex-1 bg-white/90 rounded-xl p-2 border border-[#8B5CF6]/15 text-center">
            <span className="text-[10px] text-[#6B6478] block">Weekly Progress</span>
            <span className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
              <Activity className="w-3 h-3" /> 84% Completed
            </span>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="pt-2 border-t border-[#8B5CF6]/15 flex items-center justify-between text-xs text-[#6B6478]">
        <span>Accessible Pastel Palette</span>
        <span className="font-semibold text-[#8B5CF6]">Design Sprint 2026</span>
      </div>
    </div>
  );
};

