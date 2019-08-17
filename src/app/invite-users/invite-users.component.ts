import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../api/payment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../api/account.service';

@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.css']
})
export class InviteUsersComponent {
  accountId: any;
  results: [];

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {
    this.paymentService.searchEntries('')
      .subscribe(results => {
        this.results = results;
      });
  }

  doSearch(target) {
    console.log(target);
    this.paymentService.searchEntries(target)
      .subscribe(res => {
          console.log(res);
          this.results = res;

        }
      )
    ;
  }

  invite(userId) {
    this.accountId = this.route.snapshot.paramMap.get('id');

    this.accountService.invite(this.accountId, userId)
      .subscribe((res) => {
        this.router.navigate(['/accounts']);
      });
  }

}
