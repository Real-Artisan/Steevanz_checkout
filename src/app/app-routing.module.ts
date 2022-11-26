import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';

const routes: Routes = 
[
  { path: '', component: SubscribeComponent },
  { path: 'shop/checkout/cart', component: CartComponent},
  { path: 'shop/checkout/personal-info', component: PersonalInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
