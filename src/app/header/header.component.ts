import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../api/account.service';
import {AuthentiationService} from '../api/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isAuthenticated: boolean;
  invitationsCount: number;
  requestsCount: number;
  username: string;
  money: any;
  isDone = false;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private authenticationService: AuthentiationService
  ) {
  }

  ngOnInit() {
    this.accountService.getPendingInvitations()
      .subscribe(res => {
        if (res) {
          const resp = res.filter(i => !i.acceptedOn && !i.rejectedOn);
          if (resp) {
            console.log(resp);
            this.invitationsCount = resp.length;
          } else {
            this.invitationsCount = 0;
          }
        }
      });

    this.authenticationService.myInfo()
      .subscribe((res) => {
        if (res) {
          this.username = res.fullName;
          this.money = res.money;
        }
      });
  }

  ngDoCheck(): void {
    this.isAuthenticated = localStorage.getItem('jwtToken') !== null;
    if (this.isAuthenticated && !this.isDone) {
      this.accountService.getPendingInvitations()
        .subscribe(res => {
          if (res) {
            const resp = res.filter(i => !i.acceptedOn && !i.rejectedOn);
            if (resp) {
              console.log(resp);
              this.invitationsCount = resp.length;
            } else {
              this.invitationsCount = 0;
            }
          }
        });

      this.authenticationService.myInfo()
        .subscribe((res) => {
          if (res) {
            this.username = res.fullName;
            this.money = res.money;
          }
        });

      this.isDone = true;
    }
  }

  logout() {
    localStorage.clear();
    this.isDone = false;
    this.router.navigate(['/login']);
  }

}
