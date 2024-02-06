import { CanActivateFn, Router } from '@angular/router';
import { AuthServService } from './services/auth-serv.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  // const router = new Router();
  // const auth  = new AuthServService()

  const router :Router = inject(Router);
  const auth: AuthServService = inject(AuthServService)

  if (auth.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
