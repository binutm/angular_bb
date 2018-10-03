import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IsvalidService } from '../../../services/isvalid.service';

@Component({
	selector: 'uapi-connections-destination-validator',
	templateUrl: './connections-destination-validator.component.html',
	styleUrls: ['./connections-destination-validator.component.css']
})
export class ConnectionsDestinationValidatorComponent implements OnInit {
	@Input() selectedDestination;
	@Output() onValidatedDestination: EventEmitter<any> = new EventEmitter<any>();
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();

	public isValid;
	public destinationForm;
	constructor(private isValidService: IsvalidService) { }

	ngOnInit() {
	}

	authorize() {
		this.destinationForm = true;
	}

	validate() {
		this.isValidService.isValid("destination", this.selectedDestination._id)
			.subscribe(
				data => {
					if (data.isvalid == true) {
						this.isValid = true;
					}
					else {
						this.isValid = false;
					}
				}
			);
	}

	close($event) {
		this.onClose.emit();
	}

	next() {
		this.onValidatedDestination.emit(true);
	}

	onCloseDestinationForm($event) {
		this.destinationForm = false;
	}
}
