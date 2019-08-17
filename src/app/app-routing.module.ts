import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountsComponent} from './accounts/accounts.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateAccountComponent} from './create-account/create-account.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'home', component: HomeComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create-account', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
