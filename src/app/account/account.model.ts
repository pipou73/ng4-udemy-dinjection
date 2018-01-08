import {AccountStatus} from "./account.enum";
export class Account {

    public id: number = Math.floor((Math.random() * 10) + 1);
    public name: string;
    public status: string = AccountStatus.unknown;

    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
    }

    setName(value: string) {
        this.name = value;
    }

    getName() {
        return this.name;
    }

    setStatus(value: string) {
        this.status = value;
    }

    getStatus() {
        return this.status;
    }

    setId(value: number) {
        this.id = value;
    }

    getId() {
        return this.id;
    }
}