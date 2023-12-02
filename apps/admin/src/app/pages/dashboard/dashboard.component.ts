/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../service/registration.service';
import { Registration } from '../../model/registration';

@Component({
  selector: 'store-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public registration: Registration[] = [];


  constructor(private registrationService: RegistrationService) {}


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.registrationService.getRegistration().subscribe((Regis)=>{
      this.registration = Regis;
    });
  }
}
