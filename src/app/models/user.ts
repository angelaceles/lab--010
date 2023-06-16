export class User {

    _id?: number;
    username: string;
    password: string;
    email_address: string;
    
    constructor(username:string, password:string, email_address:string){
        this.username = username;
        this.password = password;
        this.email_address = email_address;
    }
}