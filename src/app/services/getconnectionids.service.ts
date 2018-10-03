import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetconnectionidsService {

	private url = environment.apiUrl+"/getconnectionids";

	constructor(private http: HttpClient) { }

	getconnectionids() {
		return this.http.get<any>(this.url);
	}

}
