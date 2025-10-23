import { CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateChildFn=()=>{
    const auth = inject(AuthService);
    const router= inject(Router);
    if(!auth.isLoggedIn()){
        router.navigate(['/admin/login']);
        return false;
    }

    return true;
}