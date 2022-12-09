import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

  //all the logic related with this database will be created and partially declared here , like the methods/function
  //and along will declare arguments and its type, alwys the type has to be mentioned along with the variable


export class DataService {

  currentuser=' '
  currentacno=' '

  constructor() { }

  userDetails: any = {
    1001: { acno: 1001, username: "anju", password: 1231, balance: 0 ,transaction:[]},
    1002: { acno: 1002, username: "amal", password: 1232, balance: 0,transaction:[] },
    1003: { acno: 1003, username: "arun", password: 1233, balance: 0,transaction:[] },
    1004: { acno: 1004, username: "mega", password: 1234, balance: 0 ,transaction:[]}
  }


  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    } else {
      userDetails[acno] = { acno, username: uname, password: psw, balance: 0 ,transaction:[]}
      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        //storing account number
        this.currentacno=acno
         //Store name
        this.currentuser=userDetails[acno]['username']
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amnt
        userDetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
        return userDetails[acno]["balance"]
      } else {
        return false
      }
    } else {
      return false
    }
  }

  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var wit = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if (wit <= userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= wit
          userDetails[acno]["transaction"].push({type:'DEBIT',amount:wit})
          return userDetails[acno]["balance"]
        } else {
          alert('Insufficient balance')
          return false
        }
      } else {
        alert('Incorrect Password')
        return false
      }
    } else {
      alert("Incorrect Ac. No.")
      return false
    }
  }

  gettransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }
}

