import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeletedatasourceService {
	private url = environment.apiUrl+"/deletedatasource";

	constructor(private http: HttpClient) { }

	deletedatasource(connId) {
		const params = new HttpParams()
			.set('connId', connId);
		return this.http.get<any>(this.url, { params: params });
	}

}