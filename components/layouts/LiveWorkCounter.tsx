'use client';

import { useEffect, useState } from 'react';
import { projectData } from '@/data/Project.data';
import { experienceData } from '@/data/Experience.data';

const CAREER_START = new Date(2022, 3, 1); // April 1, 2022

type Elapsed = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getElapsed(): Elapsed {
  const now = new Date();

  let years = now.getFullYear() - CAREER_START.getFullYear();
  let months = now.getMonth() - CAREER_START.getMonth();
  if (months < 0) { years -= 1; months += 12; }

  const anchor = new Date(CAREER_START);
  anchor.setFullYear(CAREER_START.getFullYear() + years);
  anchor.setMonth(CAREER_START.getMonth() + months);

  const totalSeconds = Math.floor((now.getTime() - anchor.getTime()) / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return { years, months, days, hours, minutes, seconds };
}

const uniqueTechCount = new Set([
  ...projectData.flatMap((p) => p.tech),
  ...experienceData.flatMap((e) => e.tech),
]).size;

const pad = (n: number) => String(n).padStart(2, '0');

export default function LiveWorkCounter() {
  const [elapsed, setElapsed] = useState<Elapsed | null>(null);

  useEffect(() => {
    setElapsed(getElapsed());
    const id = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    {
      key: 'experience',
      overline: 'Time in Industry',
      isLive: true,
      primary: elapsed
        ? `${elapsed.years}y ${elapsed.months}mo ${elapsed.days}d`
        : '—',
      secondary: elapsed
        ? `${pad(elapsed.hours)}:${pad(elapsed.minutes)}:${pad(elapsed.seconds)}`
        : '--:--:--',
    },
    {
      key: 'projects',
      overline: 'Projects Shipped',
      isLive: false,
      primary: String(projectData.length),
      secondary: 'web · mobile · SaaS',
    },
    {
      key: 'technologies',
      overline: 'Technologies',
      isLive: false,
      primary: `${uniqueTechCount}+`,
      secondary: 'languages · frameworks · tools',
    },
    {
      key: 'companies',
      overline: 'Companies',
      isLive: false,
      primary: String(experienceData.length),
      secondary: 'startups · agencies · OJT',
    },
  ];

  return (
    <section aria-label="Work statistics" className="border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border-primary">
          {stats.map((stat) => (
            <div key={stat.key} className="p-8 space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted flex items-center gap-2">
                {stat.overline}
                {stat.isLive && (
                  <span className="text-accent" aria-label="live">
                    ●
                  </span>
                )}
              </p>

              <p
                className="font-mono text-2xl sm:text-3xl font-bold text-text-primary tabular-nums leading-none"
                suppressHydrationWarning
              >
                {stat.primary}
              </p>

              <p
                className="font-mono text-xs text-text-muted tabular-nums"
                suppressHydrationWarning
              >
                {stat.secondary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
