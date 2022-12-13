import { Component } from '@angular/core';
import { FormBuilder, ɵNgNoValidate } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  user = ''

  constructor(private ds: DataService, private fb: FormBuilder) {
    //access username
    this.user = this.ds.currentuser
  }

  depositform = this.fb.group({ acno: [''], psw: [''], amnt: [''] })
  withdrawform = this.fb.group({ acc: [''], ps: [''], wit: [''] })

  deposit() {
    var acno = this.depositform.value.acno
    var psw = this.depositform.value.psw
    var amnt = this.depositform.value.amnt

    const result = this.ds.deposit(acno, psw, amnt) // callin the function in DataService

    if (result) {
      alert(`${amnt} credited to your account, Balance is ${result}`)
    } else {
      alert("Incorrect Account number/Password")
    }

  }

  withdraw() {
    var acc = this.withdrawform.value.acc
    var ps = this.withdrawform.value.ps
    var wit = this.withdrawform.value.wit

    const result = this.ds.withdraw(acc, ps, wit)

    if (result) {
      alert(`${wit} is debited, Balance is ${result}`)
    }
  }

}




