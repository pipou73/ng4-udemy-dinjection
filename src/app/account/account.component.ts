import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {AccountService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [AccountService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };

  constructor(private accSrv: AccountService) {}

  onSetTo(status: string) {
    this.accSrv.statusChanged(this.account.id, status);
  }

}
