import{ Card} from '../models/element';


export interface CardState {
    rating: Card;
    name:Card;
}

export const initialState: CardState={
    rating: null,
    name:null
}