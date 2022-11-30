import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor( private step: StepperService, private router: Router, private formbuilder: FormBuilder) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    this.cardDetails = this.formbuilder.group({
      number: ['', Validators.compose([Validators.required])],
      expiry: ['', Validators.compose([Validators.required])],
      cvc: ['', Validators.compose([Validators.required])],
    });
  }
}
