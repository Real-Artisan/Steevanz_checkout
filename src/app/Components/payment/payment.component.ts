import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/Services/stepper.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent {
  cardDetails!: FormGroup;
  checked:boolean = false;
  constructor( private step: StepperService, private router: Router) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    this.cardDetails = new FormGroup({
      number: new FormControl('', Validators.compose([Validators.required])),
      expiry: new FormControl('', Validators.compose([Validators.required])),
      cvc: new FormControl('', Validators.compose([Validators.required])),
    });
  }
}
