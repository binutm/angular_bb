import { Component, OnInit, Input } from '@angular/core';
import { CreateDatasourceService } from '../../../services/create-datasource.service';
import { Router } from '@angular/router';
import * as $ from "jquery"

//import { FordownloadService } from '../../../services/fordownload.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'uapi-connections-scheduler',
	templateUrl: './connections-scheduler.component.html',
	styleUrls: ['./connections-scheduler.component.css']
})
export class ConnectionsSchedulerComponent implements OnInit {
	@Input() filteredEndpoints;
	@Input() selected;
	
	public scheduler = false;
	public period = 30 * 60;
	public destination;
	public download;
	public endpoint;
	public downloadData;
	public currentConnId;
	public loaderShow = false;
	public loader = false;
	public baseurl = environment.apiUrl;
	disabled: boolean = false;
	
	constructor(private createdatasourceService: CreateDatasourceService,
		//private fordownloadService: FordownloadService,
		 private router: Router
		 
		) { }

	ngOnInit() {
		// $("#push").click(function () {
        //     $(this).text(function(i, v){
        //        return v === 'YES' ? 'YES' : 'NO'
        //     })
        // });
	}

	schedulerSwitch() {
		this.scheduler = !this.scheduler;
	}

	onSelectChange(value) {
		this.period = value;
	}


	createDatasource() {
		console.log(this.filteredEndpoints + "  " + this.scheduler + "  " + this.period);
		this.loaderShow = true;

		this.createdatasourceService.createdatasource("export", this.filteredEndpoints, this.scheduler, this.period, this.selected.selectedDestination._id)
			.subscribe(
				data => {
					console.log(data);
						this.router.navigate(['/datasources/'+data.status]);
				}
			);
	}

	downloadDatasource(choice) {
		this.destination = choice;
		this.endpoint = JSON.stringify(this.filteredEndpoints);
		this.download = true;
		this.loaderShow = true;
		this.createdatasourceService.createdatasource("download", this.filteredEndpoints, this.scheduler, this.period, this.selected.selectedDestination._id)
			.subscribe(
				data => {
					console.log(data);
					if (data.status == 200) {
						this.downloadData = data.data.endpoints;
						this.currentConnId = data.data.connId;
						this.loaderShow = false;
					}
				}
			);
	}

	closeDownload() {
		this.download = false;
	}
}
