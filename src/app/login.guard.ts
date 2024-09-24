import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { map, tap } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuth.pipe(
    tap((isAuth) => {
      if (!isAuth) {
        router.navigate(['log-in']);
      }
    }),
    map((isAuth) => isAuth)
  );
};
