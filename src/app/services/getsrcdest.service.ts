import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
	providedIn: 'root'
})

export class GetsrcdestService {
	private url = environment.apiUrl+"/getsrcdest";

	constructor(private http: HttpClient) { }

	getsrcdest() {
		return this.http.get<any>(this.url);
	}

}