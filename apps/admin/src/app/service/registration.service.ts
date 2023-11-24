import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) { }

  getRegistration(): Observable<Registration[]>{
    return this.http.get<Registration[]>('http://localhost:3000/api/v1/registrations');
  }

  createRegistration(registration: Registration){
    return this.http.post('http://localhost:3000/api/v1/registrations', registration);
  }
}
