import React from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Badge } from './Badge';

interface ExperienceCardProps {
  experience: ExperienceItem;
  isLast?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast = false }) => {
  return (
    <div className="relative flex gap-6 sm:gap-8 group">
      {/* Vertical Timeline Marker & Line */}
      <div className="flex flex-col items-center">
        {/* Circle Marker */}
        <div className="w-11 h-11 rounded-2xl bg-white border-2 border-[#8B5CF6] text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white flex items-center justify-center shadow-md shadow-[#8B5CF6]/15 transition-all duration-300 shrink-0 z-10">
          <Briefcase className="w-5 h-5" />
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-[#8B5CF6]/30 via-[#DDD6FE] to-[#8B5CF6]/10 my-2" />
        )}
      </div>

      {/* Experience Content Card */}
      <div className="grow pb-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#8B5CF6]/15 shadow-xs hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:-translate-y-1 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#8B5CF6] uppercase block mb-1">
                {experience.company}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1F1B2D]">
                {experience.role}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="lavender" size="sm" icon={<Calendar className="w-3.5 h-3.5" />}>
                {experience.dates}
              </Badge>
              <Badge variant="neutral" size="sm" icon={<MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />}>
                {experience.location} {experience.isRemote && '(Remote)'}
              </Badge>
            </div>
          </div>

          {/* Short narrative */}
          <p className="text-sm sm:text-base text-[#6B6478] leading-relaxed mb-5">
            {experience.description}
          </p>

          {/* Key Responsibilities */}
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F1B2D]">
              Key Responsibilities & Contributions:
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#6B6478] leading-normal">
                  <CheckCircle className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills / Tags */}
          <div className="pt-4 border-t border-[#8B5CF6]/10">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs font-medium text-[#6B6478] mr-1">Technologies & Practices:</span>
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#FAF8FF] text-[#1F1B2D] border border-[#8B5CF6]/15 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
