import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FordownloadService {
	private url = environment.apiUrl+"/fordownload";

	constructor(private http: HttpClient) { }

	fordownload(filteredEndpoints) {
		const params = new HttpParams()
			.set('data', filteredEndpoints);

		return this.http.get<any>(this.url, { params: params });
	}
}
