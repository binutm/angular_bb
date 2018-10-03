import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

constructor(private http: HttpClient) { }


  register(user: SignupDetails) {
  
     console.log("Hello World:: "+JSON.stringify(user));
     return this.http.post<any>(environment.apiUrl+"/signup",JSON.stringify(user));
        
}



}

interface SignupDetails {
  email: string;
  password: string;
  confirmPassword : string;
  name: string;
    
}

