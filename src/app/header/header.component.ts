import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isAuthenticated: boolean;
  invitationsCount: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.isAuthenticated = localStorage.getItem('jwtToken') !== null;
    this.invitationsCount = 1;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
