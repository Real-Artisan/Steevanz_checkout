import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { StepperService } from 'src/app/Services/stepper.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoComponent {
  personalInfo!: FormGroup;
  companyInfo!: FormGroup;
  activeRoute: boolean = false;
  checked: boolean = false;
  plural: boolean = false;
  countries: any = [];
  constructor( private step: StepperService, private router: Router, private data: DataService) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    this.data.getCountries().subscribe((result) => {
      this.countries = result.sort((a: { name: { common: number; }; }, b: { name: { common: number; }; }) => (a.name.common > b.name.common)? 1 : -1)
    })
    this.personalInfo = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required,])),
      lastName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      phone: new FormControl('', Validators.compose([Validators.required,])),
      country: new FormControl('', Validators.compose([Validators.required])),
      location: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      delivery: new FormControl('',),
      postal: new FormControl('', Validators.compose([Validators.required])),
      vat: new FormControl('', Validators.compose([Validators.required])),
      from: new FormControl('', ),
      to: new FormControl('', ),
      message: new FormControl('',),
    });
    this.companyInfo = new FormGroup({
      companyName: new FormControl('', Validators.compose([Validators.required])),
      employeeName: new FormControl('', Validators.compose([Validators.required])),
      workEmail: new FormControl('', Validators.compose([Validators.required])),
      role: new FormControl('', Validators.compose([Validators.required,])),
      country: new FormControl('', Validators.compose([Validators.required])),
      location: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      delivery: new FormControl('',),
      postal: new FormControl('', Validators.compose([Validators.required])),
      vat: new FormControl('', Validators.compose([Validators.required])),
      from: new FormControl('', ),
      to: new FormControl('', ),
      message: new FormControl('',),
    });
  }
  front() {
    this.router.navigate(['/shop/checkout/payment']);

  }
  back() {
    this.router.navigate(['/shop/checkout/cart']);
  }
}
