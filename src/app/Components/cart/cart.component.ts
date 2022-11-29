import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/Services/stepper.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent {
  coupon!: FormGroup;
  constructor( private step: StepperService, private router: Router, private formBuilder: FormBuilder) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    this.coupon = formBuilder.group({
      'couponCode': new FormControl(''),
    });
  }

  front() {
    console.log('Coupon Code : '+this.coupon.value.couponCode);
    this.router.navigate(['/shop/checkout/personal-info']);

  }

}
