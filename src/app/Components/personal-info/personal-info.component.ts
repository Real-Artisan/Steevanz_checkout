import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor( private step: StepperService, private router: Router, private formbuilder: FormBuilder, private data: DataService) {
    const route = this.router.routerState.snapshot.url;
    this.step.checkRoute(route);
    this.data.getCountries().subscribe((result) => {
      this.countries = result.sort((a: { name: { common: number; }; }, b: { name: { common: number; }; }) => (a.name.common > b.name.common)? 1 : -1)
    })
    this.personalInfo = this.formbuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required,])],
      country: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      delivery: ['',],
      postal: ['', Validators.compose([Validators.required])],
      vat: ['', Validators.compose([Validators.required])],
      from: ['', ],
      to: ['', ],
      message: ['',],
    })
    this.companyInfo = this.formbuilder.group({
      companyName: ['', Validators.compose([Validators.required])],
      employeeName: ['', Validators.compose([Validators.required])],
      workEmail: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required,])],
      country: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      delivery: ['',],
      postal: ['', Validators.compose([Validators.required])],
      vat: ['', Validators.compose([Validators.required])],
      from: ['', ],
      to: ['', ],
      message: ['',],
    })
  }
  front() {
    this.router.navigate(['/shop/checkout/payment']);

  }
  back() {
    this.router.navigate(['/shop/checkout/cart']);
  }
}
