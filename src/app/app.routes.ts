import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FlyerComponent } from './components/flyer/flyer.component';
import { ElectionFlyerComponent } from './components/election-flyer/election-flyer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'reg',
    component: FormComponent,
  },
 
];
