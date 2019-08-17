import {Component, OnInit} from '@angular/core';
import {AccountService} from '../api/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  invitations: any = [];
  accepted: any = [];
  rejected: any = [];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.accountService.getPendingInvitations().subscribe(res => {
      this.invitations = res.filter(i => !i.acceptedOn && !i.rejectedOn);
      this.accepted = res.filter(i => i.acceptedOn);
      this.rejected = res.filter(i => i.rejectedOn);
    });
  }

  accept(invitation) {
    this.accountService.answerInvitation(invitation.account.id, invitation.id, {hasAccepted: true})
      .subscribe(res => {
        this.router.navigate(['account-details/' + invitation.account.id]);
        window.location.reload();
      });
  }

  reject(invitation) {
    this.accountService.answerInvitation(invitation.account.id, invitation.id, {hasAccepted: true})
      .subscribe(res => {
        this.router.navigate(['account-details/' + invitation.account.id]);
        window.location.reload();
      });
  }
}
