import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uapi-connections-search',
	templateUrl: './connections-search.component.html',
	styleUrls: ['./connections-search.component.css']
})

export class ConnectionsSearchComponent implements OnInit {
	@Input() srcdestList;
	@Input() categories;
	@Output() onListChange: EventEmitter<any> = new EventEmitter<any>();
	public list;
	public selectedCategoryList;
	public selectedCategory = "All";
	public searchValue = "";
	constructor() {
	}

	ngOnInit() {
		this.selectedCategoryList = this.srcdestList;
	}

	onSearch(value) {
		this.list = this.selectedCategoryList.filter(
			srcdest => ((srcdest._id.toLowerCase()).includes(value.toLowerCase()) || (srcdest.name.toLowerCase()).includes(value.toLowerCase())));
		this.onListChange.emit(this.list);
	}

	onCategorySelected(category) {
		this.selectedCategory = category;
		if (category == "All")
			this.list = this.srcdestList;
		else
			this.list = this.srcdestList.filter(
				srcdest => (srcdest.refIndType).includes(category));
		this.selectedCategoryList = this.list;
		this.searchValue = "";
		this.onListChange.emit(this.list);
	}
}
