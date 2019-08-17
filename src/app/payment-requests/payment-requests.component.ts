import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../api/payment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../api/account.service';

@Component({
  selector: 'app-payment-requests',
  templateUrl: './payment-requests.component.html',
  styleUrls: ['./payment-requests.component.css']
})
export class PaymentRequestsComponent implements OnInit {
  columns: number;
  requests: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {
    this.requests = [];
  }

  ngOnInit() {
    this.columns = (window.innerWidth <= 992) ? 1 : 2;
    this.accountService.getReceivedPaymentRequests()
      .subscribe((res) => {
        this.requests = res;
        console.log(res);
      });
  }

  onResize(event) {
    this.columns = (event.target.innerWidth <= 992) ? 1 : 2;
  }

  accept(request) {
    this.accountService.answer(request.sender.id, request.id, {hasAccepted: true})
      .subscribe(res => this.router.navigate(['account-details/' + request.sender.id]));
  }

  reject(request) {
    this.accountService.answer(request.sender.id, request.id, {hasAccepted: false})
      .subscribe(res => this.router.navigate(['account-details/' + request.sender.id]));
  }
}
