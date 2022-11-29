import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutBarComponent } from './Components/checkout-bar/checkout-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import {MatSelectModule} from '@angular/material/select';
import { PaymentComponent } from './Components/payment/payment.component';
import { PaymentSuccessComponent } from './Components/payment-success/payment-success.component';
import { StepperService } from './Services/stepper.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SubscribeComponent,
    CartComponent,
    CheckoutBarComponent,
    PersonalInfoComponent,
    PaymentComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StepperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
