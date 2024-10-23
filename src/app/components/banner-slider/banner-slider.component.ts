// banner-slider.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css'],
})
export class BannerSliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  private intervalId: any;

  // We'll move image paths to CSS, but keep logo URLs for inline images
  nppLogoUrl: string = 'assets/nppLogo.svg';
  jjbLogoUrl: string = 'assets/npp-logo.svg';
  candidateUrl: string = 'assets/candidate_img2.png'

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  private startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
