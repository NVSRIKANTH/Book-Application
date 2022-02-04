import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule} from '@angular/forms';
import  { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StorageDirective } from './storage.directive';
import { CustomDirective } from './custom.directive';
import {DetailsService} from './details.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { LibraryComponent } from './library/library.component';
import { AuthComponent } from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes : Routes = [
  {path:'', redirectTo:'/auth', pathMatch:'full' },
  { path:'library',component : LibraryComponent, canActivate: [AuthGuard] },
  {path:'home',component : HomeComponent, canActivate: [AuthGuard]},
  {path:'auth',component : AuthComponent},
  {path: 'not-found',component : PageNotFoundComponent},
  {path: '**',redirectTo : '/not-found'}
]
@NgModule({
  declarations: [
    AppComponent,
    StorageDirective,
    CustomDirective,
    HomeComponent,
    UsersComponent,
    PageNotFoundComponent,
    LibraryComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

