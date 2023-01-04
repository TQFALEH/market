import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuardService implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise((resolve) => {
      this.auth.afAuth.user.subscribe((user) => {
        const admin = user?.uid == 'J9TtDoNAJIThFrpfMGdxJuSplpg1';
        if (admin) {
          console.log('this is Admin');
          return resolve(true);
        } else {
          console.log('This is normal user ');
          this.router.navigate(['']);
          return resolve(false);
        }
      });
    });
  }
}
