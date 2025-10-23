import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class AuthService{
    private adminKey='isAdmin';


login(username:string, password: string):boolean
{
if(username==='admin' && password ==='1234')
{
    localStorage.setItem(this.adminKey, 'true');
}

return false;
}


logout(){
    localStorage.removeItem(this.adminKey);
}

isLoggedIn():boolean{
    return localStorage.getItem(this.adminKey)==='true';
}

}