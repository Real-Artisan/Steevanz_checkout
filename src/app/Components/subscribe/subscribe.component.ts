import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  constructor( private router: Router) {}
goToCheckout() {
  this.router.navigate(['shop/checkout/cart'])
}
}
