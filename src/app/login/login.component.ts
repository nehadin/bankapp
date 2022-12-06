import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // sample = "banking partner"
  data="Enter acc number"
  acno = ''
  psw=''
  userDetails:any = {
    1001: { acno: 1001, username: "anu", password: 1231, balance: 0 },
    1002: { acno: 1002, username: "amal", password: 1232, balance: 0 },
    1003: { acno: 1003, username: "arun", password: 1233, balance: 0 },
    1004: { acno: 1004, username: "mega", password: 1234, balance: 0 }
  }

  constructor(private router:Router){     //constructor with private class 'Router' and variable 'router'

  }


  ngOnInit(): void {

  }

  login() {
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails

    if (acno in userDetails) {
      if (psw== userDetails [acno]["password"]) {
        alert("Login Success")
        this.router.navigateByUrl('dashboard')      //declaring the path 'dashboard' to redirect the page dashboard
      } else {
        alert("Incorrect Password")
      }
    } else {
      alert("Incorrect Username")
    }
  }

  // login(a:any,b:any) {

  //   this.acno=a.value
  //   this.psw=b.value
    
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails

  //   if (acno in userDetails) {
  //     if (psw== userDetails[acno]["password"]) {
  //       alert("Login Success")
  //     } else {
  //       alert("Incorrect Password")
  //     }
  //   } else {
  //     alert("Incorrect Username")
  //   }
  // }

  acChange(event: any) {
    this.acno = event.target.value

  }
  pswChange(pass: any){
    this.psw=pass.target.value
       
  }
}
