import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetconnectionidsService } from '../../services/getconnectionids.service';
import { CheckConnectionService } from '../../services/check-connection.service';
import { DeletedatasourceService } from '../../services/deletedatasource.service';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { IsvalidService } from '../../services/isvalid.service';
import { ValidateService } from '../../services/validate.service';
import { FetchdbsService } from '../../services/fetchdbs.service';
import { environment } from '../../../environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from "jquery"

@Component({
	selector: 'uapi-created-datasources',
	templateUrl: './created-datasources.component.html',
	styleUrls: ['./created-datasources.component.css']
})
export class CreatedDatasourcesComponent implements OnInit {

	constructor(
		private getconnectionidsService: GetconnectionidsService,
		private checkconnectionService: CheckConnectionService,
		private deletedatasourceService: DeletedatasourceService,
		private isValidService: IsvalidService,
		private validateService: ValidateService,
		private fetchdbsService: FetchdbsService,
		private route: ActivatedRoute
		
	) {
		this.route.params.subscribe(params => { if (params.status) this.status = params.status });
	}

	public endpoints = [];
	public displayedColumns;
	public dataSource;
	public endpointsData;
	public endpointColumns;
	public endpointRows;
	public data;
	public selectedEndpoint;
	public viewData = false;
	public exportSuccess;
	public status;
	public connStatus;

	public sourceValid;
	public destinationValid;
	public destinationValidateForm;
	public destId;

	public dbname;
	public username;
	public password;
	public host;
	public port;
	public baseurl = environment.apiUrl;

	public dbsList;

	public selectedDatabase;
	

	// Doughnut
	public doughnutChartLabels: string[] = ['Accounting', 'CRM', 'Social', 'Mail', 'Others'];
	public doughnutChartData: number[] = [350, 450, 100, 250, 750];
	public doughnutChartType: string = 'doughnut';


	public doughnutChartLabels1: string[] = ['SQL', 'NoSQL', 'Files', 'Cloud'];
	public doughnutChartData1: number[] = [350, 75, 500, 416];
	public doughnutChartType1: string = 'doughnut';


	ngOnInit() {
		this.getconnectionidsService.getconnectionids()
			.subscribe(
				data => {
					
					console.log("ConnectionIds:: "+JSON.stringify(data));
					this.data = data;
				},
				error => {
					console.log("not coming");
				}

			);
	}

	endpointChanged(selectedEndpoint) {
		console.log(selectedEndpoint);
		this.selectedEndpoint = selectedEndpoint;

	}

	download() {

	}

	view(connId) {
		this.checkconnectionService.checkconnection("view", connId)
			.subscribe(
				data => {
					console.log(data);
					this.endpointsData = data.data;

					if (data.data.length != 0)
						this.connStatus = data.status;

					else 
						this.connStatus = 11;

					console.log("qweqwe" + data.status);
					console.log("sadasd" + data.data.length);
					this.endpointChanged(0);
					this.endpoints = data.data.map(e => e.endpoint);

					if (this.connStatus == 21)
						this.viewData = true;
				}
			);
	}

	export(connId) {
		this.checkconnectionService.checkconnection("export", connId)
			.subscribe(
				data => {
					console.log(data);
					if (data.status == 21) {
						this.exportSuccess = true;
					}
				},
				error => {
					console.log("not coming");
				}
			);
	}

	delete(connId) {
		this.deletedatasourceService.deletedatasource(connId)
			.subscribe(
				data => {
					console.log(JSON.stringify(data));
					if (data.status == 200)
						this.data.data.srcdestId = this.data.data.srcdestId.filter(connection => connection.connectionId !== connId);

				},
				error => {
					console.log("not coming");
				}
			);
	}

	close() {
		this.viewData = false;
	}

	public chartHovered(e:any):void {
		console.log(e);
	  }
	  public chartHovered1(e:any):void {
		console.log(e);
	  }

}