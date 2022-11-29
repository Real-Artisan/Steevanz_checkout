import { Component, ViewEncapsulation } from '@angular/core';
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
activeRoute: boolean = false;
  constructor( private step: StepperService, private router: Router) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
  }

  front() {
    this.router.navigate(['/shop/checkout/personal-info']);

  }

}
