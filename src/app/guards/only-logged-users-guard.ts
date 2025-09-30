import { inject } from '@angular/core';
import { CanActivateChildFn, RedirectCommand, Router } from '@angular/router';
import { authService } from '../services/auth-service';

export const onlyLoggedUsersGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(authService);
  const router = inject(Router);
  if(!auth.token){
    const newpaths = router.parseUrl("/login");
    return new RedirectCommand(newpaths, {
      skipLocationChange: true,
    });
  }
  return true;
};
