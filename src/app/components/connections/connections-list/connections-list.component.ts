import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uapi-connections-list',
	templateUrl: './connections-list.component.html',
	styleUrls: ['./connections-list.component.css']
})
export class ConnectionsListComponent implements OnInit {
	@Input() srcdestList: any;
	@Output() onSelected: EventEmitter<any> = new EventEmitter<any>();
	constructor() { }

	ngOnInit() {
	}

	onSelect(srcdest) {
		console.log(srcdest);
		this.onSelected.emit(srcdest);
	}
}