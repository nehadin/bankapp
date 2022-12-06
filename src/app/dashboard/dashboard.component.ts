import { Component } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { DataService } from '../services/data.service';

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

  constructor(private ds: DataService) { }

  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt

    const result = this.ds.deposit(acno, psw, amnt)

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
      alert(`${wit} withdraw from your account, Balance is ${result}`)
    } else {
      alert('Incorrect Account number/Password')
    }
  }

}




