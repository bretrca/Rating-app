import { createReducer, on } from '@ngrx/store';
import { random, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(random, state =>  state, Math.random),
  on(reset, state => state= 0),
);

export function counterRandom(state, action) {
  return _counterReducer(state, action);
}