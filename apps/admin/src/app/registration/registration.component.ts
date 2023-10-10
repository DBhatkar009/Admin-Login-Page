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

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
   this.registrationForm = this.fb.group({
    firstName: new FormControl('',  Validators.required),
    lastName: new FormControl('',  Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    eMailId: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required)
   });
  }


  public  onSubmit(){
    console.log(this.registrationForm.controls['firstName'].value);
    console.log(this.registrationForm.controls['lastName'].value);
    console.log(this.registrationForm.controls['passWord'].value);
  }

}
