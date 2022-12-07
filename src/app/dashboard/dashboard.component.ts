import { Component } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno = ''
  psw = ''
  amnt = ''
  acc = ''
  ps = ''
  wit = ''

  user=''

  constructor(private ds: DataService) {
    //access username
    this.user=this.ds.currentuser
   }

  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt

    const result = this.ds.deposit(acno, psw, amnt) // callin the function in DataService

    if (result) {
      alert(`${amnt} credited to your account, Balance is ${result}`)
    } else {
      alert("Incorrect Account number/Password")
    }

  }

  withdraw() {
    var acc = this.acc
    var ps = this.ps
    var wit = this.wit

    const result = this.ds.withdraw(acc, ps, wit)

    if (result) {
      alert(`${wit} is debited, Balance is ${result}`)
    } 
  }

}




