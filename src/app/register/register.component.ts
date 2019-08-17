import {Component, OnInit} from '@angular/core';
import {UserRegister} from '../models/UserRegister';
import {AuthentiationService} from '../api/authentication.service';
import {Router} from '@angular/router';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public model: UserRegister;

  constructor(
    private authenticationService: AuthentiationService,
    private router: Router
  ) {
    this.model = new UserRegister('', '', '', '');
  }

  ngOnInit() {
  }

  register($event: Event) {
    this.authenticationService.register(this.model)
      .subscribe((regres) => {
        this.authenticationService.login({email: this.model.email, password: this.model.password})
          .subscribe((logres) => {
            console.log(logres);
          });
      });
  }

}
