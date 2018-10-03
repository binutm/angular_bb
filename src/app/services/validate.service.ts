import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ValidateService {
	private url = environment.apiUrl+"/validate";
	constructor(private http: HttpClient) { }

	validate(type, srcdestId, database_name, db_username, db_password, server_host, server_port) {
		const params = new HttpParams()
			.set('type', type)
			.set('srcdestId', srcdestId)
			.set('database_name', database_name)
			.set('db_username', db_username)
			.set('db_password', db_password)
			.set('server_host', server_host)
			.set('server_port', server_port);
		return this.http.get<any>(this.url, { params: params });
	}
}
