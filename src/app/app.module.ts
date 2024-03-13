// import { RouterModule } from '@angular/router';
// import { NgModel } from '@angular/forms';
// import { NgModule } from '@angular/core';

// // other imports...

// @NgModule({
//   imports: [
//     // other modules...
//     RouterModule.forRoot([]),
//   ],
//   // other configurations...
// })
// export class AppModule { }

// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Adjust the import

import { AppComponent } from './app.component';
import { NavbarComponent } from './health/navbar/navbar.component';
import { AboutComponent } from './health/about/about.component';
import { LoginComponent } from './health/login/login.component';
import { BookAppoiComponent } from './health/book-appoi/book-appoi.component';
import { ViewDoctorComponent } from './health/view-doctor/view-doctor.component';
import { FillformComponent } from './health/fillform/fillform.component';
import { ContactComponent } from './health/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    BookAppoiComponent,
    ViewDoctorComponent,
    FillformComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],  // Adjust the import
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
