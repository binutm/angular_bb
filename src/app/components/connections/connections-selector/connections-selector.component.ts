import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetsrcdestService } from '../../../services/getsrcdest.service';

@Component({
	selector: 'uapi-connections-selector',
	templateUrl: './connections-selector.component.html',
	styleUrls: ['./connections-selector.component.css']
})
export class ConnectionsSelectorComponent implements OnInit {
	@Output() onValidated: EventEmitter<any> = new EventEmitter<any>();
	@Output() onSourceValidated: EventEmitter<any> = new EventEmitter<any>();

	public selectedSource;
	public validatedSource;

	public selectedDestination;
	public validatedDestination;

	public list;

	public sourcesList;
	public destinationsList;
	public srcCategories;
	public destCategories;

	public srcdestList: any;

	constructor(private getsrcdestService: GetsrcdestService) { }

	ngOnInit() {
		this.getsrcdestService.getsrcdest()
			.subscribe(
				data => {
					this.sourcesList = data.sources;
					this.destinationsList = data.destinations;
					this.srcCategories = data.categories;
					this.destCategories = data.categories;
					if (!this.validatedSource) {
						this.updateList(data.sources);
					}
					else {
						this.updateList(data.destinations);
					}

					console.log(JSON.stringify(data));
				}
				
			);
	}

	updateList($event) {
		this.list = $event;
	}

	onSelectedSource($event) {
		this.selectedSource = $event;
	}

	onSelectedDestination($event) {
		this.selectedDestination = $event;
		console.log("Selected  "+JSON.stringify(this.selectedDestination))
	}

	onValidatedSource($event) {
		this.validatedSource = $event;
		this.updateList(this.destinationsList);
	}

	onValidatedDestination($event) {
		this.onValidated.emit({"selectedSource": this.selectedSource, "selectedDestination": this.selectedDestination});
	}

	onCloseSource($event) {
		this.selectedSource = undefined;
	}

	onCloseDestination($event) {
		this.selectedDestination = undefined;
	}
}