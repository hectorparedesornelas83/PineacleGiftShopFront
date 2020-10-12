import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Route[] = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'form', component: FormComponent},
  {path:'form/:id', component: FormComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
