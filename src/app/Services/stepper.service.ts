import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
firstRoute: boolean = false;
secondRoute: boolean = false;
thirdRoute: boolean = false;
  constructor(private activeRoute: Router) {
  }
  checkRoute(routeName: string) {
    const routeArray = routeName.split('/');
    if(routeArray[3] == 'cart') {
      this.firstRoute = true;
      this.secondRoute = false;
      this.thirdRoute = false;
    }else if(routeArray[3] == 'personal-info') {
      this.secondRoute = true;
      this.firstRoute = false;
      this.thirdRoute = false;
    } else if(routeArray[3] == 'payment') {
      this.thirdRoute = true;
      this.firstRoute = false;
      this.secondRoute = false;
    }else {
      return;
    }    
  }
}
