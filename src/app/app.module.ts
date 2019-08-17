import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { InvitationsComponent } from './invitations/invitations.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AccountDetailsComponent } from './account-details/account-details.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { PaymentRequestsComponent } from './payment-requests/payment-requests.component';
import {FormsModule} from '@angular/forms';
import {AuthentiationService} from './api/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from './api/account.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AccountsComponent,
    LoginComponent,
    RegisterComponent,
    CreateAccountComponent,
    InvitationsComponent,
    AccountDetailsComponent,
    PaymentRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthentiationService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
