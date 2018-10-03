import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterEndpointsService } from '../../../services/filter-endpoints.service';

@Component({
	selector: 'uapi-connections-filter-endpoints',
	templateUrl: './connections-filter-endpoints.component.html',
	styleUrls: ['./connections-filter-endpoints.component.css']
})
export class ConnectionsFilterEndpointsComponent implements OnInit {

	@Output() onSelectedFilteredEndpoints: EventEmitter<any> = new EventEmitter<any>();
	public endpoints;
	public options = {};

	constructor(private filterEndpoints: FilterEndpointsService) { }

	ngOnInit() {
		this.filterEndpoints.filterEndPoints().subscribe(
			data => {
				this.endpoints = data.endpoints;
				for (let i = 0; i < data.endpoints.length; i++) {
					let opt = {};

					for (let j = 0; j < data.endpoints[i].value.length; j++) {
						opt[data.endpoints[i].value[j]] = false;
					}
					this.options[data.endpoints[i].name] = opt;
				}
			}
		);
	}

	next() {

		this.onSelectedFilteredEndpoints.emit(this.options);
	}
}