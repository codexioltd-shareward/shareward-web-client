import {Component} from '@angular/core';
import {PaymentService} from '../api/payment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../api/account.service';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent {
  accountId: any;
  results: [];
  receiverId: any;
  name: any = '';
  sum: any = 0;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {
  }

  doSearch(target) {
    console.log(target);
    this.accountService.findByPrefix('')
      .subscribe(res => {
          console.log(res);
          this.results = res;
        }
      )
    ;
  }

  setReceiver(receiverId, name) {
    this.receiverId = receiverId;
    this.results = [];
    this.name = name;
  }

  pay() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.accountService.initiatePayment(this.accountId, {receiverId: this.receiverId, sum: this.sum})
      .subscribe(res => this.router.navigate(['account-details/' + this.accountId]));
  }
}
