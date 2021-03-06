import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromProductActions from '../../modules/product/state/product.actions';

@Injectable()
export class RouteEffects {
  goShopping$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap(() => this.route.navigate(['product']))
      ),
    { dispatch: false }
  );

  goHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logOut),
        tap(() => this.route.navigate(['home']))
      ),
    { dispatch: false }
  );

  goProductList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromProductActions.upsertProductSuccess),
        tap(() => this.route.navigate(['/product/list']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private route: Router
  ) { }

}
