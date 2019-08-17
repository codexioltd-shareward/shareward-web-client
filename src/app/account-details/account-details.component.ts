import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../api/account.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: any = {users: []};

  constructor(
    private router: Router,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.accountService.findById(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.account = res;
        console.log(res);
      });
  }
}
