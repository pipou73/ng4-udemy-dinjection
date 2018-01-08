import { Account } from './account/account.model'
import { AccountStatus } from './account/account.enum'
import {Injectable, EventEmitter} from "@angular/core";
import {LoggingService} from './logging.service'

@Injectable()
export class AccountService {
    changeAccounts = new EventEmitter<Account[]>();
    accounts: Account[] = [
        new Account('Master Account', AccountStatus.active),
        new Account('Testaccount', AccountStatus.inactive),
        new Account('Hidden Account', AccountStatus.unknown)
    ];

    constructor(private logSvr: LoggingService) {}

    addAccount(account: Account) {
        this.accounts.push(account);
        this.logSvr.logNewAccount(account);
        this.changeAccounts.emit(this.accounts)
    }

    statusChanged(id: number, newStatus: string) {
        console.log('id', id);
        const account = this.accounts.find((account: Account) => account.id === id)
        if (account) {
            account.status = newStatus;
            this.logSvr.logStatusChange(newStatus);
            this.changeAccounts.emit(this.accounts)
        }
    }

    getAccounts() {
        return this.accounts;
    }
}