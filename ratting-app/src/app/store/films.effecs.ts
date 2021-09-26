import { FilmsService } from '../services/films.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {mergeMap, map} from 'rxjs/operators';
import * as types from './action.types';
import * as FilmActions from './film.actions';
import * as loadFilmsRating from './film.actions';
import {Observable} from 'rxjs';

export class FilmEfects {
    constructor(
        private service: FilmsService,
        private actions$: Actions

    ){}
   /*  @Effect() LoadFilms$: Observable<Action> = this.actions$.pipe(
        ofType<FilmActions.loadFilmsAction>(types.LOAD_FILMS),
        mergeMap(() =>
            this.service.getAllFilms()
                .map( cards => new FilmActions.loadFilmsRating)
            ) 
    ) */
}