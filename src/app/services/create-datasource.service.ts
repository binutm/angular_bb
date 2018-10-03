import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CreateDatasourceService {
	private url = environment.apiUrl+"/createdatasource";

	constructor(private http: HttpClient) { }

	createdatasource(choice, filteredEndpoints, scheduled, period, destination) {
		const params = new HttpParams()
			.set('choice', choice)
			.set('filteredEndpoints', JSON.stringify(filteredEndpoints))
			.set('scheduled', scheduled)
			.set('period', period)
			.set('destination', destination);
		return this.http.get<any>(this.url, { params: params });
	}

}
