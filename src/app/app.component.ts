import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlyerComponent } from './components/flyer/flyer.component';
import { ElectionFlyerComponent } from './components/election-flyer/election-flyer.component';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    FormComponent,
    FooterComponent,
    FlyerComponent,
    ElectionFlyerComponent,
    DetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ElectionWeb';
}
