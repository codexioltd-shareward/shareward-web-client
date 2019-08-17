import { Component, OnInit } from '@angular/core';
import {Account} from '../models/Account';
import {AccountService} from '../api/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  columns: number;
  accounts: any;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.columns = (window.innerWidth <= 992) ? 1 : 2;
    this.accountService.get()
      .subscribe((res) => {
        this.accounts = res;
        console.log(res);
      });
  }

  onResize(event) {
    this.columns = (event.target.innerWidth <= 992) ? 1 : 2;
  }

  redirectToDetails(id) {
    this.router.navigate(['/account-details/' + id]);
  }
}
