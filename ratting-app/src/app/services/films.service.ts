/* Aquí vamos a insertar los libros */
import { Injectable } from '@angular/core';
import {Cards} from '../models/mock';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  cards = Cards;
  constructor() { }
  getAllFilms(){
  return this.cards;  
  }
}
