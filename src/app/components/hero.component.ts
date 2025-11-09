import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { TypingEffectDirective } from '../directives/typing-effect.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollAnimationDirective, TypingEffectDirective],
  template: `
    <section
      id="about"
      class="flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-10"
    >
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            class="space-y-4"
            appScrollAnimation="fadeInLeft"
            [scrollAnimationDelay]="0"
            [scrollAnimationDuration]="600"
          >
            <div>
              <h2
                class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                Swapnil <span class="gradient-text">Zambre</span>
              </h2>
              <p
                class="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-1"
                appTypingEffect="Front-End Developer | Angular Developer"
                [typingSpeed]="80"
                [deletingSpeed]="40"
                [startDelay]="50"
                [pauseDelay]="3000"
              ></p>
            </div>

            <p
              class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              Results-driven Front-End Developer with 3.8+ years of professional
              experience specializing in Angular, responsive design, and RESTful
              API integration. Passionate about building scalable, user-centric
              web applications.
            </p>

            <div class="space-y-4 pt-4">
              <div
                class="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <a
                  href="mailto:swapnilzambre911@gmail.com"
                  class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >swapnilzambre911@gmail.com</a
                >
              </div>
              <div
                class="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.894.894c.159.588.283 1.231.283 1.875 0 .644-.124 1.287-.283 1.875l1.894.894a1 1 0 01.54 1.06l-.74 4.435a1 1 0 01-.986.836H3a1 1 0 01-1-1V3z"
                  />
                </svg>
                <a
                  href="tel:+919309551519"
                  class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >+91 9309551519</a
                >
              </div>
              <div
                class="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a
                  href="https://www.linkedin.com/in/swapnil-z-39b9a3246"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >LinkedIn Profile</a
                >
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <a href="#projects" class="btn-primary">View My Work</a>
              <a href="#skills" class="btn-secondary">My Skills</a>
            </div>
          </div>

          <div
            class="hidden md:block"
            appScrollAnimation="fadeInRight"
            [scrollAnimationDelay]="200"
            [scrollAnimationDuration]="600"
          >
            <div class="relative w-80 h-80 mx-auto">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse"
              ></div>

              <div
                class="relative w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
              >
                <img
                  [src]="'/Images/IMG.png'"
                  alt="Profile"
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
