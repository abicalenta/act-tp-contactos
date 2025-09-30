import { inject } from '@angular/core';
import { CanActivateChildFn, RedirectCommand, Router } from '@angular/router';
import { AuthService, authService } from '../services/auth-service';

export const onlyLoggedUsersGuard: CanActivateChildFn = (childRoute, state) => {
    const auth = inject(AuthService);
  const router = inject(Router);
  if(auth.token){
    const newPath = router.parseUrl("/");
    return new RedirectCommand(newPath, {
      skipLocationChange: true,
    });
  }
  return true;
};

