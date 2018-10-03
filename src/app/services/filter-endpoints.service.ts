import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FilterEndpointsService {
	private url = environment.apiUrl+"/filterendpoints";

	constructor(private http: HttpClient) { }

	filterEndPoints() {
		return this.http.get<any>(this.url);
	}
}
