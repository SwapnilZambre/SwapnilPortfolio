import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { TypingEffectDirective } from '../directives/typing-effect.directive';

interface Project {
  title: string;
  role: string;
  tech: string[];
  description: string;
  highlight?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="projects" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div class="section-container">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Key Projects</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let project of projects; let i = index" class="card-hover bg-white dark:bg-slate-950 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl" [appScrollAnimation]="i % 2 === 0 ? 'slideInLeft' : 'slideInRight'" [scrollAnimationDelay]="0" [scrollAnimationDuration]="700">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2" >{{ project.title }}</h3>
              <p class="text-blue-600 dark:text-blue-400 font-semibold mb-4" >{{ project.role }}</p>
              
              <p class="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{{ project.description }}</p>

              <div *ngIf="project.highlight" class="bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-600 p-4 mb-6 rounded">
                <p class="text-slate-800 dark:text-slate-200 font-semibold">{{ project.highlight }}</p>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Technologies:</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.tech" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'AggDirect',
      role: 'Software Developer',
      tech: ['Angular 17-20','JavaScript', 'TypeScript','Angular Material', 'HTML5','CSS', 'Bootstrap', 'Auth0', 'Python'],
      description: 'Logistics management platform built as a distributed micro frontend architecture.',
      highlight: 'Built modular UI components across five micro frontends and implemented secure multi-portal access with Auth0',
    },
    {
      title: 'Internal Trading System - Nifty 50',
      role: 'Angular Developer',
      tech: ['Angular 15', 'Bootstrap', 'TypeScript', 'HTML5','CSS',  'JavaScript','Angular Material'],
      description: 'Modernized legacy trading platform for enhanced performance and improved user experience.',
      highlight: 'Improved platform responsiveness and delivered better trading workflows',
    },
    {
      title: 'IGT (Ship Booking)',
      role: 'Angular Developer',
      tech: ['Angular 14','TypeScript', 'HTML5','Bootstrap','CSS', 'C', 'C++', 'JavaScript','Angular Material',],
      description: 'Ship booking application with optimized UI workflows and error reduction.',
      highlight: 'Reduced booking errors by 25% through improved UI/UX design and validation',
    },
    {
      title: 'Leaptiger (Job Portal)',
      role: 'Angular Developer',
      tech: ['Angular 13', 'TypeScript', 'HTML5','Bootstrap','CSS','Angular Material', 'JavaScript'],
      description: 'Feature-rich job portal platform with modern responsive design and intuitive navigation.',
      highlight: 'Delivered a feature-complete job portal with excellent mobile responsiveness',
    },
    {
      title: 'Trading System Modernization',
      role: 'Angular Developer',
      tech: ['Angular 16', 'HTML5', 'TypeScript', 'Bootstrap', 'C','Angular Material', 'CSS'],
      description: 'Legacy platform modernization project with improved UI/UX and performance optimization.',
      highlight: 'Revamped legacy application with modern responsive design and improved performance',
    },
  ];
}
