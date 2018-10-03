import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordRequestService {
  private forget_pwd_request_Url: string = environment.apiUrl+"/passwordresetrequest";

  constructor(private http: HttpClient) { }

  forget_pwd_request(email) {
		
		var myJSON = JSON.stringify(email);
		const params = new HttpParams()
	.set('email', myJSON["forget_email"]);
		//	.set('password', loginDetails.password);
			//var obj = this.http.get<any>(this.loginUrl, {params : body});
			//var myJSON = JSON.stringify(obj);
	   //alert(myJSON);
	   return this.http.get<any>(this.forget_pwd_request_Url, {params : params});

	}
}



