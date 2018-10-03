import { Component, OnInit } from '@angular/core';
import { GetsrcdestService } from '../../services/getsrcdest.service';

@Component({
	selector: 'app-datasources',
	templateUrl: './datasources.component.html',
	styleUrls: ['./datasources.component.css']
})
export class DatasourcesComponent implements OnInit {
	public selectedSource;
	public onSelected;
	public type = "Sources";
	public sources;

	constructor(private getsrcdestService: GetsrcdestService) { }

	ngOnInit() {
		this.getsrcdestService.getsrcdest()
			.subscribe(
				data => { 
					this.sources = data.sources;
				}
			);
	}

	onSelect(selectedSource: any) {
		this.selectedSource = selectedSource;
	}

	onClose() {
		this.selectedSource = undefined;
	}

}
