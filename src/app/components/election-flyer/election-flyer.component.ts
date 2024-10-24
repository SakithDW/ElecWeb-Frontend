import { Component } from '@angular/core';

@Component({
  selector: 'app-election-flyer',
  standalone: true,
  imports: [],
  templateUrl: './election-flyer.component.html',
  styleUrl: './election-flyer.component.css',
})
export class ElectionFlyerComponent {
  candidate_img1: string = 'assets/candidate_img2.png';
  party_img: string = 'assets/nppLogo.svg';
}
