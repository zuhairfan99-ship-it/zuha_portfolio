import { Palette, Code2, Cpu, Database, ArrowUpRight } from 'lucide-react';
import { SkillCategory } from '../types';
import { Tilt } from './MotionSystem';
export function SkillCard({ category, index = 0 }: { category: SkillCategory; index?: number }) {
  const Icon = [Palette, Code2, Cpu, Database][index % 4];
  return <Tilt className={`skill-card skill-${index}`}><div className="skill-top"><Icon /><span>0{index + 1}</span><ArrowUpRight /></div><h3>{category.title}</h3><p>{category.description}</p><div className="skill-pills">{category.skills.map(skill => <span key={skill}>{skill}</span>)}</div></Tilt>;
}
