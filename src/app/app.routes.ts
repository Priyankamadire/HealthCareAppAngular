// import { Routes } from '@angular/router';
// import { NavbarComponent } from './health/navbar/navbar.component';
// import { AboutComponent } from './health/about/about.component';
// import { LoginComponent } from './health/login/login.component';
// import { BookAppoiComponent } from './health/book-appoi/book-appoi.component';
// import { ViewDoctorComponent } from './health/view-doctor/view-doctor.component';
// import { FillformComponent } from './health/fillform/fillform.component';
// import { ContactComponent } from './health/contact/contact.component';
// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'navbar', 
//     pathMatch: 'full'
//   },
//   {
//     path: 'navbar', 
//     component: NavbarComponent
//   },
  
//   {
//     path: 'about', 
//     component: AboutComponent
//   },
// {
//     path:'login',
//     component:LoginComponent
// },
// {
//     path:'book-appoi',
//     component:BookAppoiComponent
// },
// {
//     path:'view-doctor',
//     component:ViewDoctorComponent

// },
// {
//     path:'fill-form',
//     component:FillformComponent

// },
// {
//     path:'contact',
//     component:ContactComponent

// }
// ];



import { Routes } from '@angular/router';
import { NavbarComponent } from './health/navbar/navbar.component';
import { AboutComponent } from './health/about/about.component';
import { LoginComponent } from './health/login/login.component';
import { BookAppoiComponent } from './health/book-appoi/book-appoi.component';
import { ViewDoctorComponent } from './health/view-doctor/view-doctor.component';
import { FillformComponent } from './health/fillform/fillform.component';
import { ContactComponent } from './health/contact/contact.component';
import { SubmitformComponent } from './health/submitform/submitform.component';
export const routes: Routes = [
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book-appoi', component: BookAppoiComponent },
  { path: 'view-doctor', component: ViewDoctorComponent },
  { path: 'fill-form', component: FillformComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'submit-form', component: SubmitformComponent },

];
