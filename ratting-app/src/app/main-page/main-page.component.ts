import { Component, OnInit, OnChanges } from "@angular/core";

import { FilmsService } from "../services/films.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  cards = [];
  tempCards = [];
  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.cards = this.filmService.getAllFilms();
    this.tempCards = this.cards;
  }
  ngOnchanges() {
    return this.orderItems();
  }
  orderItems() {
    console.log("ordenando...");
    return this.sortCards(this.tempCards);
    //return this.tempCards.sort((a,b)=>{return b.rating -a.rating});
  }

  addStar(element) {
    console.log("upgrade");

    if (element.rating !== 10) {
      element.rating += 1;
      console.log(element);
      return element;
    }
  }

  reduceStar(element) {
    console.log("downgrade");
    if (element.rating !== 0) {
      element.rating -= 1;
      return element;
    }
  }

  randomValue() {
    let tempCards = this.tempCards;
    for (let i = 0; i <= this.tempCards.length; i++) {
      let random = Math.floor(Math.random() * (10 - 0)) + 0;
      this.tempCards[i].rating = random;
    }
    return this.tempCards.sort((a, b) => {
      return b.rating - a.rating;
    });
  }

  randomUnit() {
    let tempCards = this.tempCards;
    let random = Math.floor(Math.random() * (10 - 0)) + 0;
    tempCards[random].rating = Math.floor(Math.random() * (10 - 0)) + 0;
    alert(`elemento cambiado ${tempCards[random]}`);
    return tempCards;
  }

  sortCards(cards) {
    let temp = cards.sort(function (a: any, b: any) {
      return b.rating - a.rating;
    });
    console.log("elementos", temp);
    return temp;
  }
}
