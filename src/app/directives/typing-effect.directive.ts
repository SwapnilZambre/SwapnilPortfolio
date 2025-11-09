import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
  standalone: true,
})
export class TypingEffectDirective implements OnInit, OnDestroy {
  @Input() appTypingEffect: string = '';
  @Input() typingSpeed: number = 100;
  @Input() deletingSpeed: number = 50;
  @Input() startDelay: number = 0;
  @Input() pauseDelay: number = 3000;
  @Input() delayBeforeNext: number = 500;

  private phrases: string[] = [];
  private currentPhraseIndex = 0;
  private currentIndex = 0;
  private isDeleting = false;
  private typingInterval: any = null;
  private startTimeout: any = null;
  private observer: IntersectionObserver | null = null;
  private hasStarted = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
    if (this.startTimeout) {
      clearTimeout(this.startTimeout);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options: IntersectionObserverInit = {
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasStarted) {
          this.startTyping();
          this.hasStarted = true;
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private startTyping() {
    const text = this.appTypingEffect || this.el.nativeElement.textContent;
    this.phrases = text.split('|').map((phrase: string) => phrase.trim());
    this.el.nativeElement.textContent = '';
    this.currentPhraseIndex = 0;
    this.currentIndex = 0;
    this.isDeleting = false;

    this.startTimeout = setTimeout(() => {
      this.type();
    }, this.startDelay);
  }

  private type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (!this.isDeleting && this.currentIndex < currentPhrase.length) {
      this.el.nativeElement.textContent += currentPhrase[this.currentIndex];
      this.currentIndex++;
      this.typingInterval = setTimeout(() => {
        this.type();
      }, this.typingSpeed);
    } else if (!this.isDeleting && this.currentIndex === currentPhrase.length) {
      this.isDeleting = true;
      this.typingInterval = setTimeout(() => {
        this.type();
      }, this.pauseDelay);
    } else if (this.isDeleting && this.currentIndex > 0) {
      const text = this.el.nativeElement.textContent;
      this.el.nativeElement.textContent = text.slice(0, -1);
      this.currentIndex--;
      this.typingInterval = setTimeout(() => {
        this.type();
      }, this.deletingSpeed);
    } else if (this.isDeleting && this.currentIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.typingInterval = setTimeout(() => {
        this.type();
      }, this.delayBeforeNext);
    }
  }
}
