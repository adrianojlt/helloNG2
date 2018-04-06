import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';

export const ROUTES: Routes = [
  //{ path: 'dash', component: null, pathMatch: 'full' },
  { path: 'forms', component: FormComponent },
  { path: 'tables', component: TablesComponent }
  //{ path: '**', component: null }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TablesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
