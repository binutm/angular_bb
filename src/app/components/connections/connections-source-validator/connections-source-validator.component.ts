import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IsvalidService } from '../../../services/isvalid.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'uapi-connections-source-validator',
	templateUrl: './connections-source-validator.component.html',
	styleUrls: ['./connections-source-validator.component.css']
})
export class ConnectionsSourceValidatorComponent implements OnInit {
	@Input() selectedSource;
	@Output() onValidatedSource: EventEmitter<any> = new EventEmitter<any>();
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();

	public isValid;
	constructor(private isValidService: IsvalidService) { }

	ngOnInit() {
	}

	authorize() {
		let url = environment.apiUrl+'/validate?type=source&srcdestId=' + this.selectedSource._id;
		window.open(url, "_blank", 'width=800, height=600, menubar=no, resizable=no, status=no, toolbar=no, location=no');
		this.isValid = undefined;
	}

	validate() {
		this.isValidService.isValid("source", this.selectedSource._id)
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
		this.onValidatedSource.emit(true);
	}
}