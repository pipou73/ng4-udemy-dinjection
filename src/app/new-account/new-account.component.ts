import { Component, Output, EventEmitter } from '@angular/core';
import { AccountService } from "../accounts.service";
import { Account } from "../account/account.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private accSrv: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    const account = new Account(accountName, accountStatus);
    this.accSrv.addAccount(account);
  }
}
