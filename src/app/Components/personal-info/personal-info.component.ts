import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/Services/stepper.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoComponent {
  activeRoute: boolean = false;
  constructor( private step: StepperService, private router: Router) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    console.log('perinf')
  }
  front() {
    this.router.navigate(['/shop/checkout/payment']);

  }
  back() {
    this.router.navigate(['/shop/checkout/cart']);
  }
}
