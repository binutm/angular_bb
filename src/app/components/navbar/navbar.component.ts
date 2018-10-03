import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'uapi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public  isUserLoggedIn : boolean;
  public  name:string;
  public  x :null;
  public isCollapsed = true;
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private router: Router) { }
  
  ngOnInit() {

    
     if(sessionStorage.getItem("name")==this.x){
      this.isUserLoggedIn = false;
     }
      
      else{
      
        this.isUserLoggedIn =true;
        this.name=sessionStorage.getItem("name");
      }

    
  }

  logout() {
    this.isUserLoggedIn = false;
    sessionStorage.clear();
	this.router.navigate([""]);
  }
}
