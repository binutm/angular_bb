import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
	
	private loginUrl: string = environment.apiUrl+"/login";

	private isUserLoggedIn;
	
	constructor(private http: HttpClient) {
		this.isUserLoggedIn = false;
	}

	login(loginDetails: LoginDetails) {
		const body = new HttpParams()
    		.set('email', loginDetails.email)
			.set('password', loginDetails.password);
			//var obj = this.http.get<any>(this.loginUrl, {params : body});
			//var myJSON = JSON.stringify(obj);
	   //alert(myJSON);
	   return this.http.get<any>(this.loginUrl, {params : body});

	}

	checkLogin() {
		this.setUserLoggedIn();
	}

	setUserLoggedIn() {
		this.isUserLoggedIn = true;
	}

	resetUserLoggedIn() {
		this.isUserLoggedIn = false;
	}

	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}
}

interface LoginDetails {
	email: string;
    password: string;
}