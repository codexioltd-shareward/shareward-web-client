import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class PaymentService {
  url = '/api';
  queryUrl = '/users?email=';

  constructor(private http: HttpClient) {
  }

  // search(terms: Observable<string>) {
  //   return terms.pipe(
  //     // debounceTime(),
  //     distinctUntilChanged(),
  //     switchMap(term => this.searchEntries(term)));
  // }

  searchEntries(term) {
    return this.http
      .get(this.url + this.queryUrl + term, {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      });
  }

  make(accountId, body) {
    return this.http.post(this.url + '/account/' + accountId + '/initiatedRequest', body,
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }

  answer(accountId, paymentRequest, body) {
    return this.http.patch(this.url + '/accounts/' + accountId + 'initiatedRequest' + paymentRequest, body,
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }
}
