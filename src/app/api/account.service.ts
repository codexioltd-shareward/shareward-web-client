import {HttpClient} from '@angular/common/http';

export class AccountService {
  url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = 'http://localhost:8080';
  }

  create(body) {
    return this.http.post(this.url + '/accounts', body, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  get() {
    return this.http.get(this.url + '/accounts');
  }
}
