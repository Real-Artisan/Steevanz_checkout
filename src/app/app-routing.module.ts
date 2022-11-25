import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';

const routes: Routes = 
[
  { path: '', component: SubscribeComponent },
  { path: 'shop/cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
