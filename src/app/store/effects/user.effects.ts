import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {EUserActions, GetUser} from '../actions/user.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._action$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    // map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, user])) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of (new GetUserSuccess(selectedUser))
}
  );




  constructor(
    // private _userService:UserService,
    private _action$: Actions,
    private _store: Store<IAppState>
  ){}
}
