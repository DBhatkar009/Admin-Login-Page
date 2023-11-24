import { RegistrationService } from './../service/registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Registration } from '../model/registration';

@Component({
  selector: 'store-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public hide = true;
  public registrationForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isSubmitted: boolean = false;


  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {}


  ngOnInit(): void {
   this.registrationForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    eMailId: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required)
   });
  }


  public  onSubmit() {
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      return;
    }
    const registration: Registration = {
      firstName:this.regisForm['firstName'].value,
      lastName:this.regisForm['lastName'].value,
      phoneNumber:this.regisForm['phoneNumber'].value,
      dateOfBirth:this.regisForm['dateOfBirth'].value,
      eMailId:this.regisForm['eMailId'].value,
      passWord:this.regisForm['passWord'].value
    }
   this.registrationService.createRegistration(registration).subscribe;
   console.log(registration);
  }

  get regisForm() {
    return this.registrationForm.controls;
  }

}
