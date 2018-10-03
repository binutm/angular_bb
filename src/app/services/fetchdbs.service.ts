import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FetchdbsService {
	private url = environment.apiUrl+"/fetchdbs";

	constructor(private http: HttpClient) { }

	fetchdbs(destId) {
		const params = new HttpParams()
			.set('destId', destId);
		return this.http.get<any>(this.url, { params: params });
	}

}
