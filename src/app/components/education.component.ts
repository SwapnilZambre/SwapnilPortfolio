import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollAnimationDirective],
  template: `
    <section class="py-20 bg-white dark:bg-slate-950">
      <div class="section-container">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

        <div class="card-hover bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-lg border border-blue-200 dark:border-slate-700" appScrollAnimation="fadeInUp" [scrollAnimationDelay]="0" [scrollAnimationDuration]="600">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-14 w-14 rounded-md bg-blue-600 text-white">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.75 3.5 10.5 3.5 15.5s2.5 8.75 8.5 10.25m0-13c5.5-1.5 8.5-5.25 8.5-10.25s-3-8.75-8.5-10.25" />
                </svg>
              </div>
            </div>
            <div class="flex-grow">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white">B.Tech – Mechanical Engineering</h3>
              <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">Dr. Babasaheb Ambedkar Technological University, Lonere</p>
              <p class="text-slate-700 dark:text-slate-300 mt-2">Graduation Year: 2021</p>
              <p class="text-slate-600 dark:text-slate-400 mt-1">CGPA: 69%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {}
