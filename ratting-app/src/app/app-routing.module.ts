import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'main-page', component:MainPageComponent}
  //{path:'main-page', loadChildren:'./main-page/main-page.component#MainPageComponent'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
