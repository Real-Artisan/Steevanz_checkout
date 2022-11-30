import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { PaymentSuccessComponent } from './Components/payment-success/payment-success.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';

const routes: Routes = 
[
  {
    path: '', children: [
      { path: '', component: SubscribeComponent, data: { animation: 'One'} },
      { path: 'shop/checkout/cart', component: CartComponent, data: { animation: 'Two' }},
      { path: 'shop/checkout/personal-info', component: PersonalInfoComponent, data: { animation: 'Three' }},
      { path: 'shop/checkout/payment', component: PaymentComponent, data: { animation: 'Four' }},
      { path: 'shop/checkout/payment/success', component: PaymentSuccessComponent, data: { animation: 'Five' }},
      {
        path: '**',
        redirectTo: ''
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
