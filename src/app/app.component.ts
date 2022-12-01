import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
// @ts-ignore
import { slider } from './route-animations.ts';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent implements OnInit {
  title = 'Steevanz_checkout';
  constructor(private contexts: ChildrenOutletContexts, private primengConfig: PrimeNGConfig) {}

  animateRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }


  ngOnInit() {
    this.primengConfig.ripple = true;
  }


}
