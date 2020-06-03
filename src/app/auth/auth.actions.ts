import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export const login = createAction('[Auth] Login', props<{ user: User}>());
export const loginSuccess = createAction('[Auth] Login Success');
export const logout = createAction('[Auth] Logout');