import { Component } from '@angular/core';
import { BannerSliderComponent } from '../banner-slider/banner-slider.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerSliderComponent,BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
