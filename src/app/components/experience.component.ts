import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { TypingEffectDirective } from '../directives/typing-effect.directive';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="experience" class="py-20 bg-white dark:bg-slate-950">
      <div class="section-container">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

        <div class="space-y-8">
          <div *ngFor="let exp of experiences; let i = index" class="card-hover bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800" [appScrollAnimation]="i % 2 === 0 ? 'slideInLeft' : 'slideInRight'" [scrollAnimationDelay]="0" [scrollAnimationDuration]="700">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ exp.title }}</h3>
                <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">{{ exp.company }}</p>
              </div>
              <span class="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">{{ exp.period }}</span>
            </div>
            <ul class="space-y-3">
              <li *ngFor="let desc of exp.description" class="flex gap-3 text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>{{ desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Developer',
      company: 'Senwell Solutions Pvt. Ltd.',
      period: 'January 2023 – Present',
      description: [
        'Developed reusable Angular components for logistics web app (AggDirect) spanning five micro frontends',
        'Integrated RESTful APIs and Auth0 for JWT-based authentication and secure multi-portal access',
        'Collaborated with Python backend developers and participated in Agile ceremonies and code reviews',
        'Optimized component performance and ensured responsive design across all devices',
      ],
    },
    {
      title: 'Associate System Analyst',
      company: 'National Stock Exchange IT',
      period: 'March 2022 – January 2023',
      description: [
        'Designed and implemented responsive UIs with Angular and Bootstrap for trading applications',
        'Integrated APIs for real-time data rendering and financial data visualization',
        'Mentored junior developers and conducted comprehensive code reviews',
        'Collaborated with UX/UI designers and backend teams to deliver integrated solutions',
      ],
    },
  ];
}
