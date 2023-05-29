import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { AboutPage } from './pages/about/about.component';
import { OurServicesPage } from './pages/our-services/our-services.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'sobre-nosotros',
    component: AboutPage
  },
  {
    path: 'nuestros-servicios',
    component: OurServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
