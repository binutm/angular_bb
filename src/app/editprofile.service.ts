import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {

  constructor(private http: HttpClient) { }
  public url;
  editUser(user: EditDetails)
  {
    console.log("Hello World:: "+JSON.stringify(user));
    return    this.http.post<any>(environment.apiUrl+"/profile",JSON.stringify(user));
  }

    getUser(email){
    const params = new HttpParams()
			.set('email', email);
		return this.http.get<any>(environment.apiUrl+"/getuserdetails", { params: params });

    }

}

interface EditDetails {
  email: string;
  company : string;
  contact : string;
  pincode : string;
  address1 : string;
  address2 : string;
  name: string;
}

