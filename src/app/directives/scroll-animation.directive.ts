import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() appScrollAnimation: string = 'fadeInUp';
  @Input() scrollAnimationDelay: number = 0;
  @Input() scrollAnimationDuration: number = 600;

  private observer: IntersectionObserver | null = null;
  private isAnimating = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElement();
        } else {
          this.resetAnimation();
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateElement() {
    if (this.isAnimating) return;

    const element = this.el.nativeElement;
    const animationType = this.appScrollAnimation;

    element.style.animation = 'none';
    element.offsetHeight;

    const animationDuration = this.scrollAnimationDuration / 1000;
    const animationDelay = this.scrollAnimationDelay / 1000;

    element.style.animation = `${animationType} ${animationDuration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${animationDelay}s forwards`;
    this.isAnimating = true;
  }

  private resetAnimation() {
    const element = this.el.nativeElement;
    element.style.animation = 'none';
    this.isAnimating = false;
  }
}
