import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutes} from 'src/app/app.routes.modules';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { WelcomeHomeComponent } from './component/welcome-home/welcome-home.component';
import { ApproveComponent } from './component/approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingformComponent,
    ContactComponent,
    AboutComponent,
    WelcomeHomeComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
