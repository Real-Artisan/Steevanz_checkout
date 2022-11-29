import { Component } from '@angular/core';
import { StepperService } from 'src/app/Services/stepper.service';

@Component({
  selector: 'app-checkout-bar',
  templateUrl: './checkout-bar.component.html',
  styleUrls: ['./checkout-bar.component.scss']
})
export class CheckoutBarComponent {
  routeA: boolean = false;
  routeB: boolean = false;
  routeC: boolean = false;
  constructor( private step: StepperService) {
    if(step.firstRoute) {
      this.routeA = step.firstRoute;
      this.routeB = false;
      this.routeC = false;
    }
    if(step.secondRoute){
      this.routeB = step.secondRoute
      this.routeA = true
      this.routeC = false;
    }
    if(step.thirdRoute) {
      this.routeC = step.thirdRoute;
      this.routeA = true;
      this.routeB = true;
    }
  }
}
