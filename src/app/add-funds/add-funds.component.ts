import {Component, OnInit} from '@angular/core';
import {AccountService} from '../api/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {

  model: any = {};

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  pay() {
    this.model.amount *= 100;
    this.accountService.pay(this.model)
      .subscribe(res => {
        window.location.href = '/accounts';
      });

  }
}
