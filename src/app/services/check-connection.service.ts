import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CheckConnectionService {

	private url = environment.apiUrl+"/checkconnection";

	constructor(private http: HttpClient) { }

	checkconnection(choice, connId) {
		const params = new HttpParams()
			.set('choice', choice)
			.set('connId', connId);
		return this.http.get<any>(this.url, { params: params });
	}
}