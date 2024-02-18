import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserAuth } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    constructor(private AuthService: UserAuth, private route: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        // Cast the return value of isAuthenticated() to a Promise<boolean>
        return (this.AuthService.isAuthenticated() as Promise<boolean>)
        .then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            } else {
                // Return UrlTree to navigate to the '/' route
                return this.route.createUrlTree(['/']);
            }
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(route,state)
    }
}
