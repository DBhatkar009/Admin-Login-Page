import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

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


  constructor(private fb: FormBuilder) {}


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
    console.log(this.regisForm['firstName'].value);
    console.log(this.regisForm['lastName'].value);
    console.log(this.regisForm['passWord'].value);
  }

  get regisForm() {
    return this.registrationForm.controls;
  }

}
