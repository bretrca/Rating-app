import { Component, OnInit } from '@angular/core';

import {Cards} from './models/mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
 
  constructor(private router:Router){
    this.inizializeApp();

  };
      inizializeApp(){
          this.router.navigate(['/home']);
      }
  title = 'ratting-app';
  ngOnInit(){
    this.enterApp();
  }
  /* function to enter into de ranking */
  enterApp(){
this.router.navigate(['/home']);
  }
}

