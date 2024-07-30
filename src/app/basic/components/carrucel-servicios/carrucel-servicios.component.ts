import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'carrucel-servicios',
  templateUrl: './carrucel-servicios.component.html',
  styleUrls: ['./carrucel-servicios.component.css']
})
export class CarrucelServiciosComponent implements AfterViewInit {
  @ViewChild('servicios') servicios!: ElementRef;
  scrollAmount = 0;
  containerWidth: number = 0;
  contentWidth: number = 0;
  itemWidth: number = 300;
  gap: number = 20;

  

  ngAfterViewInit() {
    this.calculateWidths();
    window.addEventListener('resize', () => this.calculateWidths());
  }

  calculateWidths() {
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    const serviciosElement = this.servicios.nativeElement as HTMLElement;

    this.containerWidth = carouselInner.offsetWidth;
    this.contentWidth = serviciosElement.scrollWidth;


    if (this.contentWidth > this.containerWidth) {
      this.scrollAmount = Math.min(this.scrollAmount, this.contentWidth - this.containerWidth);
    }
  }

  scrollLeft() {
    this.scrollAmount -= this.itemWidth + this.gap;
    if (this.scrollAmount < 0) this.scrollAmount = 0;
    this.updateScroll();
  }

  scrollRight() {
    const maxScroll = this.contentWidth - this.containerWidth;
    this.scrollAmount += this.itemWidth + this.gap;
    if (this.scrollAmount > maxScroll) this.scrollAmount = maxScroll;
    this.updateScroll();
  }

  updateScroll() {
    if (this.servicios && this.servicios.nativeElement) {
      this.servicios.nativeElement.style.transform = `translateX(-${this.scrollAmount}px)`;
    }
  }
}
