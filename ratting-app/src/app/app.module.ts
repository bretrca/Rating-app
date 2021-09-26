import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';

import { StoreModule } from '@ngrx/store';
import { counterRandom } from './counter.random';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count:counterRandom})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  

}
