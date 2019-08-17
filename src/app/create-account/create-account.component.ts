import {Component, OnInit} from '@angular/core';
import {AccountService} from '../api/account.service';
import {Router} from '@angular/router';
import {Account} from '../models/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  model: Account;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {

    this.model = new Account('', 0);
  }

  ngOnInit() {
  }

  create($event) {
    this.accountService.create(this.model)
      .subscribe((res) => {
        this.router.navigate(['/accounts']);
      });
  }

}
