import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AuthService } from "./auth.service";
import { User } from "./user.model";


@Injectable({ providedIn : 'root'})

export class AuthGuard implements CanActivate {
 
 constructor(private authService: AuthService) {}

 canActivate(
     route: ActivatedRouteSnapshot,
     router: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      return this.authService.user.pipe(map(user => {
          return !!user;
      }));  
    }
}