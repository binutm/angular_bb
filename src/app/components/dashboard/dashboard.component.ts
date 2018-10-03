import { Component, OnInit } from '@angular/core';

import { MatStepperModule } from '@angular/material/stepper';
import{DashboardDataService} from '../../services/dashboard-data.service';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from "jquery"
import { environment } from '../../../environments/environment';
import { GetsrcdestService } from '../../services/getsrcdest.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	constructor(private http: HttpClient,private getsrcdestService: GetsrcdestService) {

		this.response={};
		this.initializeWebSocketConnection();
		this.dataSourceCreated = 0;
		this.dataSourceScheduled = 0;
		this.filesDownloaded = 0;
		this.rowsFetched = 0;
		this.notifyUrl = environment.apiUrl+"/notify";
		
	 }

	profile = {};
	public response;
	public errorMsg;
	private serverUrl = environment.apiUrl+'/socket';
	private stompClient;
	public dataSourceCreated:number;
	public dataSourceScheduled:number;
	public filesDownloaded:number;
	public rowsFetched:number;
	private notifyUrl : string;
	
	public chartHovered(e:any):void {
		console.log(e);
	  }
	  public chartHovered1(e:any):void {
		console.log(e);
	  }

	  initializeWebSocketConnection(){
		let ws = new SockJS(this.serverUrl);
		this.stompClient = Stomp.over(ws);
		let that = this;
	//	ws.emit('myevent', {value: 'someValue'})
		this.stompClient.connect({}, function(frame) {
			that.stompClient.subscribe("/chat",
			
			(message) => {
		
			if(message.body) {
			//  $(".ml-auto mr-2 mt-3").append("<div class='value'>"+message.body+"</div>")
			  console.log("web socket connection\n");
				that.loadData(message);
			}
		  });
		  that.http.get<any>(that.notifyUrl)
			.subscribe(
				data => { 
				}
			);
		});
		
	  }

	loadData(message) {
		console.log("clicked button\n");
		//this._userservice.getUser().subscribe(data => 
			//{
			//console.log("statistics:: "+stringify(data));
			//JSON.stringify(this.profile);
			//this.profile = data;
	//});
	
	this.response = JSON.parse(message.body);
	this.dataSourceCreated = this.response.data.DatasourcesCreated;
	this.dataSourceScheduled = this.response.data.DatasourcesScheduled;
	this.filesDownloaded = this.response.data.FilesDownloaded;
	this.rowsFetched = this.response.data.RowsFetced;
	
	console.log("Data ::"+this.dataSourceCreated+" "+this.dataSourceScheduled+" "+
	this.filesDownloaded+" "+this.rowsFetched);

		}
	// Doughnut
	public doughnutChartLabels: string[] = ['Accounting','CRM','Social','Mail', 'Others'];
	public doughnutChartData: number[] = [350, 450, 100, 250, 750];
	public doughnutChartType: string = 'doughnut';

	
	public doughnutChartLabels1: string[] = ['SQL', 'NoSQL', 'Files', 'Cloud'];
	public doughnutChartData1: number[] = [350, 75, 500, 416];
	public doughnutChartType1: string = 'doughnut';

	private _opened: boolean = false;

	private _toggleSidebar() {
		this._opened = !this._opened;
	}
	ngOnInit() {
		
		$(document).ready(function() {
			window.history.pushState(null, "", window.location.href);        
			window.onpopstate = function() {
				window.history.pushState(null, "", window.location.href);
			};
		});


			{
			//this._userservice.getUser().subscribe(data=>this.profile=data, 
				//error=>this.errorMsg=error);
			};

		
	
	}

	sendMessage(message){
		console.log(message);
		
	
	  }




}
