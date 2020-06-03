import * as fromActions from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { User } from './model/user.model';

export interface AuthState {
    user: User
}

export const initialState: AuthState = {
    user: undefined
};

const _authReducer = createReducer(initialState,
    on(fromActions.login, (state, action) => ({
        ...state,
        user: action.user
    })),
    on(fromActions.logout, state => ({
        ...state,
        user: undefined
    }))
);

export function AuthReducer(state, action) {
    return _authReducer(state, action);
}