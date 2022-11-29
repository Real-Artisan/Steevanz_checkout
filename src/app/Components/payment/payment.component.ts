import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/Services/stepper.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent {
  activeRoute:boolean = false;
  constructor( private step: StepperService, private router: Router) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    console.log('payment')
  }
}
