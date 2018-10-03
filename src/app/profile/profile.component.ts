import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { EditprofileService } from '../editprofile.service';

@Component({
  selector: 'uapi-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: EditprofileService;
  editForm: FormGroup;
  public email : string;
  public isCollapsed = false;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: EditprofileService) { }

  ngOnInit() {
    let email = sessionStorage.getItem("email");
    alert("Value is : "+email);
    if(!email) {
      alert("Invalid action.")
      this.router.navigate(['dashboard']);
      return;
    }


    this.editForm = this.formBuilder.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      contact: ['', Validators.required],
      pincode: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
     
  });

  this.email=sessionStorage.getItem("email");

    

    this.userService.getUser(+email)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.userService.editUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error);
        });
  }

}




