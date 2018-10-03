import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ForgetPasswordRequestService } from '../../forget-password-request.service';

@Component({
	selector: 'app-page-login',
	templateUrl: './page-login.component.html',
	styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
	modalRef: BsModalRef;
	loginForm: FormGroup;
	submitted = false;
	loading = false;
	shouldShowErrorMsg : boolean = false;
	errorMessage:String;
	stat = 0;
	forget_email :string;
	message_text:string;
	message_type:string;
	instruction : InstructionDetails;
	constructor(
		private loginService: LoginService,
		private forget_password: ForgetPasswordRequestService,
		private router: Router,
		private formBuilder: FormBuilder,
		public alertService: AlertService,
		private modalService: BsModalService,
	) { }

	ngOnInit() {



		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', [Validators.required]],
			forget_email:['', [Validators.required]],


			
		});



	}
	openModal(template: TemplateRef<any>) {
		
        this.modalRef = this.modalService.show(template);
      }

	get f() { return this.loginForm.controls; }


	onSubmit() {
		this.submitted = true;

	// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}


		this.loading = true;
		this.loginService.login(this.loginForm.value)
			.subscribe(
				data => {
					console.log(data);

					this.loginSubmitted(data, this.loginForm.value);
					
				},
				err => {
					this.alertService.error(err);
					this.loading = false;
					console.error("Login credentials invalid");
					console.error("Error in Login!");
				}
			);

			

	}
	SendInst(){
	
		

	this.forget_password.forget_pwd_request(this.loginForm.value)
			.subscribe(
				data => {
					alert("Hi");
					console.log(data);

					this.sendinstruction(data, this.loginForm.value);
					this.router.navigate(['/login']);
					
				},
				err => {
					
					console.error(" Email entered is invalid");
					//console.error("Error in Login!");
				}
			);
			}

			sendinstruction(data, instructionDetails: InstructionDetails) {
				switch (data.status) {
					case 200: {
						
						//this.alertService.success('Login successful', true);
						//console.log(data.data.name);
						//this.message_text = "Login successful";
						//this.message_type = "success";
						//sessionStorage.setItem("name", data.data.name);
						//sessionStorage.setItem("email", data.email);
						//this.loginService.setUserLoggedIn();
						this.router.navigate(['/login']);
					
						break;
					}

					case 404: {
						this.message_text = "Email Not Registered.";
						this.message_type = "error";
						// this.errorMessage = "Email Not Registered.";
						// this.shouldShowErrorMsg = true;
						// this.stat = 4;
						break;
					}
					default:{
						//this.errorMessage = "Some error occured."
						//this.shouldShowErrorMsg = true;
						console.log("None executed");
					}	
				}
		
			}
	// onSubmit(loginDetails:LoginDetails) {
	// 	this.loginService.login(loginDetails)
	// 		.subscribe(
	// 			data => {
	// 				console.log(data);

	// 				this.loginSubmitted(data,loginDetails);
	// 			},
	// 			err => {
	// 				console.error("Error in Login!");
	// 			}
	// 		);
	// }


	onKey(event: KeyboardEvent) { 
		console.log("keybored");
		this.errorMessage = "";
		this.shouldShowErrorMsg = false;
	}

	loginSubmitted(data, loginDetails: LoginDetails) {
		switch (data.status) {
			case 200: {
				//this.alertService.success('Login successful', true);
				//console.log(data.data.name);
				this.message_text = "Login successful";
                this.message_type = "success";
				sessionStorage.setItem("name", data.data.name);
				sessionStorage.setItem("email", data.data.email);
				this.loginService.setUserLoggedIn();
				this.router.navigate(['/dashboard']);
			
				break;
			}
			case 202: {
				this.message_text = "Email not verified";
                this.message_type = "error";
				//this.errorMessage = "Email not verified";
				//this.shouldShowErrorMsg = true;
				//this.stat = 2;
				break;
			}
			case 403: {
				this.message_text = "Invalid Credentials.";
                this.message_type = "error";
				// this.errorMessage = "Invalid Credentials.";
				// this.shouldShowErrorMsg = true;
				// this.stat = 3;
				break;
			}
			
			case 404: {
				this.message_text = "Email Not Registered.";
                this.message_type = "error";
				// this.errorMessage = "Email Not Registered.";
				// this.shouldShowErrorMsg = true;
				// this.stat = 4;
				break;
			}
			default:{
				//this.errorMessage = "Some error occured."
				//this.shouldShowErrorMsg = true;
				console.log("None executed");
			}	
		}

	}
}
interface LoginDetails {
	email: string;
	password: string;
}


interface InstructionDetails {
	email: string;
    
}