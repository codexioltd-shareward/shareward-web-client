import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.isAuthenticated = localStorage.getItem('jwtToken') !== null;
  }

}
