import { inject } from '@angular/core';
import { CanActivateChildFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const onlyLoggedUsersGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if(!auth.token){
    const newpaths = router.parseUrl("/login");
    return new RedirectCommand(newpaths, {
      skipLocationChange: true,
    });
  }
  return true;
};
