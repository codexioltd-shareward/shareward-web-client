import {HttpClient} from '@angular/common/http';

export class AuthentiationService {
  url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = 'http://localhost:8080';
  }

  login(body) {
    return this.http.post<any>(this.url + '/login', body, {observe: 'response'});
  }

  register(body) {
    return this.http.post<any>(this.url + '/users', body, {observe: 'response'});
  }

  saveData(token, id) {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('id', id);
  }
}
