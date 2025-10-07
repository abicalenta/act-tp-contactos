
import { AuthService } from '../services/auth-service';
import { inject } from '../../../node_modules/@angular/core/index';
import { CanActivateChildFn, RedirectCommand, Router } from '../../../node_modules/@angular/router/index';

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

