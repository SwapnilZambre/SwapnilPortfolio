import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { TypingEffectDirective } from '../directives/typing-effect.directive';

interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="skills" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div class="section-container">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div *ngFor="let category of skillCategories; let i = index" class="card-hover bg-white dark:bg-slate-950 p-8 rounded-lg border border-slate-200 dark:border-slate-800" [appScrollAnimation]="i % 2 === 0 ? 'slideInLeft' : 'slideInRight'" [scrollAnimationDelay]="0" [scrollAnimationDuration]="700">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-2xl">{{ category.icon }}</div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ category.category }}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span *ngFor="let skill of category.skills" class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Soft Skills</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let skill of softSkills; let i = index" class="card-hover bg-white dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-800 text-center" [appScrollAnimation]="i % 2 === 0 ? 'slideInLeft' : 'slideInRight'" [scrollAnimationDelay]="0" [scrollAnimationDuration]="700">
              <div class="text-4xl mb-4">{{ skill.icon }}</div>
              <p class="text-lg font-semibold text-slate-900 dark:text-white">{{ skill.name }}</p>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

          <div class="card-hover bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-lg border border-blue-300 dark:border-blue-700" appScrollAnimation="scaleIn" [scrollAnimationDelay]="0" [scrollAnimationDuration]="600">
            <div class="flex items-center gap-4">
              <svg class="w-12 h-12 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <div>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Java Full Stack Developer</h3>
                <p class="text-slate-700 dark:text-slate-300">Qspider Institute Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        'Angular (v13-20)',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Angular Material',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend & Databases [Understanding]',
      icon: '⚙️',
      skills: ['ASP.net Core Web API', 'Java', 'SQL', 'RESTful APIs', 'JWT Authentication'],
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Figma', 'Jira', 'Docker', 'Postman', 'VS Code'],
    },
  ];

  softSkills = [
    { name: 'Team Collaboration', icon: '👥' },
    { name: 'Attention to Detail', icon: '👁️' },
    { name: 'Agile Mindset', icon: '⚡' },
    { name: 'Problem Solving', icon: '🧠' },
  ];
}
