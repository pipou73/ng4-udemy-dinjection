import {Component, OnInit} from '@angular/core';
import { AccountService } from './accounts.service'
import { Account } from './account/account.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accSrv: AccountService) {}

  ngOnInit() {
    this.accounts = this.accSrv.getAccounts();
    this.accSrv.changeAccounts.subscribe(
      (accounts: Account[]) => {
       this.accounts = accounts;
    })
  }
}
