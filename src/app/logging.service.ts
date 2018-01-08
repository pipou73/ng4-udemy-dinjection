
import {Account} from "./account/account.model";
export class LoggingService {

    logStatusChange(status: string) {
        console.log('A account status changed, new status: ' + status);
    }

    logNewAccount(account: Account) {
        console.log('A server has new account', account);
    }
}