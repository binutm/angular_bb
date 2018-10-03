import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'uapi-connections-container',
	templateUrl: './connections-container.component.html',
	styleUrls: ['./connections-container.component.css']
})
export class ConnectionsContainerComponent implements OnInit {
	public step = 1;
	public srcdestValidated;
	public filteredEndpoints;
	public selectedEndpoints;
	public savedSource;
	public selectedSrcdest;
	public scheduler;
	
	constructor() { }

	ngOnInit() {
	}

	sourceValidated($event) {
		this.savedSource = $event.selectedSource;
		this.step = 2;
	}

	validated($event) {
		this.srcdestValidated = true;
		this.selectedSrcdest = $event;
		this.step = 3;
	}

	selectedFilteredEndpoints($event){
		this.selectedEndpoints = $event;
		this.filteredEndpoints = true;
		this.step = 4;
	}

	changeStep($event) {
		if($event == 1) {
			this.srcdestValidated = false;
			this.filteredEndpoints = false;
			this.selectedEndpoints = undefined;
		//	this.list = this.data.sources;
			this.step = 1;
		}
		else if($event == 2) {
			this.srcdestValidated = false;
			this.filteredEndpoints = false;
			this.selectedEndpoints = undefined;
		//	this.list = this.data.destinations;
			this.step = 2;
		}
		else if($event == 3) {
			this.selectedEndpoints = undefined;
			this.filteredEndpoints = false;
			this.step = 3;
		}
	}

}