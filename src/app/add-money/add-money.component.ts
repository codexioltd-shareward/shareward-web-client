import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../api/payment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../api/account.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent {
  accountId: any;
  results: [];
  receiverId: any;
  name: any = '';
  amount: any = 0;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {
  }

  send() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.accountService.deposit(this.accountId, {amount: this.amount})
      .subscribe(res => {
        window.location.href = '/account-details/' + this.accountId;
      });
  }

}
