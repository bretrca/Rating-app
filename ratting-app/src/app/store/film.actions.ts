import {Action, Store} from '@ngrx/store';
import * as types from './action.types';
import { Card } from '../models/element';



export class rateFilmsRandom implements Action {
    readonly  type= types.RATE_FILMS_RANDOM;
    
    constructor(public payload: Card[]){

    }
}
export class addStar implements Action {
     readonly type= types.ADD_STAR;
     
    constructor(public payolad: number, public store: Store<Card>){
       
    }
      addStar(element) {
        console.log("upgrade")
        
        if (element.rating !== 10) {
          element.rating += 1;
          console.log(element)
          return element;
        }
      }
    }
export class reduceStar implements Action {
    readonly type = types.REDUCE_STAR;
    constructor(public payolad: number){}

    reduceStar(element) {
        console.log("reduce")
        
        if (element.rating !== 0) {
          element.rating -= 1;
          console.log(element)
          return element;
        }
      }
}

export class sortFilmsRandom implements Action {
    type= types.SORT_FILMS_RANDOM;
    constructor(public payolad: string){
      
    }
}
export type Actions = rateFilmsRandom| sortFilmsRandom |addStar |reduceStar;