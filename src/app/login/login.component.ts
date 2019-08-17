import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../models/UserLogin';
import {AuthentiationService} from '../api/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserLogin;

  constructor(
    private authenticationService: AuthentiationService,
    private router: Router
  ) {
    this.model = new UserLogin('', '');
  }

  ngOnInit() {
  }

  login($event) {
    this.authenticationService.login(this.model)
      .subscribe((res) => {
        console.log(res);
        this.authenticationService.saveData(res.headers.get('Authorization'), res.body.userId);
        this.router.navigate(['/accounts']);
      });
  }

}
