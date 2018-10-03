import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SignupService } from '../services/signup.service';



@Component({ templateUrl: 'page-signup.component.html' })
export class PageSignupComponent implements OnInit {
   
    registerForm: FormGroup;

    loading = false;
    submitted = false;
    passwordMismatch: boolean = false;
    passwordMismatchErrMsg: string;
    saveSuccess: boolean;
    message_text:string;
    message_type:string;
    temp;

    ;
    // mask: any[] = ['+', /[1-9]/, /[1-9]/, /[1-9]/,' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    // mask2: any[] = ['^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'];
    checked: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private signupService: SignupService,
        
    //    private alertService: AlertService,

    ) { }

    ngOnInit() {
        
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            name: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$')]],
            confirmPassword: ['', [Validators.required, Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$')]],

        });

    }
    

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onKey(event: KeyboardEvent) {
        this.passwordMismatchErrMsg = "";
        this.passwordMismatch = false;
    }

    isValid(user: SignupDetails) {

        if (user.password != user.confirmPassword) {
            this.passwordMismatch = true;
            this.passwordMismatchErrMsg = "Password does not match.";
            return false;
        }

        return true
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid || !this.isValid(this.registerForm.value)) {
            return;
        }
       
        console.log("service signup");

        this.loading = true;
        this.signupService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("POST Request is successful ", data);
                    console.log("status:: "+data.status+typeof(data.status));
                    this.temp = data.status;
                    switch(this.temp){
                        case 200:{
                            this.message_text = "Registration successful";
                            this.message_type = "success";
                            console.log("New User added");
                            break;
                        }
                        case 201:{
                            this.message_text = "User already Exist";
                            this.message_type = "error";
                        console.log("User already exists" + data.message);
                        break;
                        //this.alertService.error(this.message, true);
                        }
                        case 202:{
                            this.message_text = "Email not verified";
                            this.message_type = "error";
                            console.log("Email not verified consol5e261" + data.message);
                            break;
                        }
                        default:{
                            console.log("None executed");
                           
                        }
                    }
                    
                    setTimeout(()=>this.router.navigate(['/login']),3000);
                    //this.router.navigate(['/login']);
                },
               
                error => {

                    this.message_type = "error";
                    this.message_text = "Registration successful";
                  //  this.alertService.error(error);
                    this.loading = false;

                    console.log("Error", error);
                }
            );

    }
}

interface SignupDetails {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;

}
