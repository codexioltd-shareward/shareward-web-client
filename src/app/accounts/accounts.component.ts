import { Component, OnInit } from '@angular/core';
import {Account} from '../models/Account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  columns: number;

  constructor() {

  }

  ngOnInit() {
    this.columns = (window.innerWidth <= 992) ? 1 : 2;
  }

  onResize(event) {
    this.columns = (event.target.innerWidth <= 992) ? 1 : 2;
  }

}
