import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesPage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    register();
  }

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    spaceBetween: 20,
    pagination: { clickable: true, dynamicBullets: true },
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: { delay: 5000 },
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

}
