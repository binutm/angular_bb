import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchdbsService } from '../../../services/fetchdbs.service';
import { ValidateService } from '../../../services/validate.service';

@Component({
	selector: 'uapi-connections-destination-form',
	templateUrl: './connections-destination-form.component.html',
	styleUrls: ['./connections-destination-form.component.css']
})
export class ConnectionsDestinationFormComponent implements OnInit {
	@Input() destId;
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();
	public dbsList;

	public selected;

	public dbname;
	public username;
	public password;
	public host;
	public port;

	public showMessage =false;

	constructor(private fetchdbsService: FetchdbsService, private validateService: ValidateService) { }

	ngOnInit() {
		this.fetchdbsService.fetchdbs(this.destId._id)
			.subscribe(
				data => {
					this.dbsList = data.data;
				}
			);
	}

	onSubmit(data) {
		this.validateService.validate("destination", this.destId._id, this.dbname, this.username, this.password, this.host, this.port)
			.subscribe(
				data => {
					if(data.isvalid == true) {
						this.onClose.emit();
						this.showMessage = false;
					}
					else
						this.showMessage = true;
				}
			);
	}

	dbSelected(db) {
		this.selected = db;
		this.dbname = db[0].value;
		this.username = db[1].value;
		this.password = db[4].value;
		this.host = db[2].value;
		this.port = db[3].value;
	}

	close($event) {
		this.onClose.emit();
	}

}