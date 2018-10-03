import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uapi-connections-stepper',
	templateUrl: './connections-stepper.component.html',
	styleUrls: ['./connections-stepper.component.css']
})
export class ConnectionsStepperComponent implements OnInit {
	@Input() step;
	@Output() onStepChanged: EventEmitter<any> = new EventEmitter<any>();
	constructor() { }

	ngOnInit() {
	}

	stepChanged(step) {
		if(step<this.step)
			this.onStepChanged.emit(step);
	}
}
