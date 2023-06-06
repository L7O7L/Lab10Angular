export class Usuario {

    _id?: number;
    username?: string;
    email: string;
    password: string;
    

    constructor(password:string, email: string){
        this.email = email;
        this.password = password;
    }

}