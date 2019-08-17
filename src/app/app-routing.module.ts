import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountsComponent} from './accounts/accounts.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {InvitationsComponent} from './invitations/invitations.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {MakeRequestComponent} from './make-request/make-request.component';
import {InviteUsersComponent} from './invite-users/invite-users.component';
import {PaymentRequestsComponent} from './payment-requests/payment-requests.component';
import {AddMoneyComponent} from './add-money/add-money.component';
import {AddFundsComponent} from './add-funds/add-funds.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'home', component: HomeComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'invitations', component: InvitationsComponent},
  {path: 'account-details/:id', component: AccountDetailsComponent},
  {path: 'payment-request/:id', component: MakeRequestComponent},
  {path: 'invite-users/:id', component: InviteUsersComponent},
  {path: 'deposit/:id', component: AddMoneyComponent},
  {path: 'receivedRequests', component: PaymentRequestsComponent},
  {path: 'add-funds', component: AddFundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
