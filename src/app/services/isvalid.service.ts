import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class IsvalidService {
	private url = environment.apiUrl+"/isvalid";

	constructor(private http: HttpClient) { }

	isValid(type, srcdestId) {
		const params = new HttpParams()
			.set('type', type)
			.set('srcdestId', srcdestId);
		return this.http.get<any>(this.url, { params: params });
	}

}
