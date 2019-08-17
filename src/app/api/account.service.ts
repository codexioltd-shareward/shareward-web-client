import {HttpClient} from '@angular/common/http';

export class AccountService {
  url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = '/api';
  }

  create(body) {
    return this.http.post(this.url + '/accounts', body, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  get() {
    return this.http.get(this.url + '/accounts',
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }

  findByPrefix(prefix) {
    return this.http.get(this.url + '/accounts/filter?name=' + prefix, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  findById(id) {
    return this.http.get(this.url + '/accounts/' + id,
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }

  invite(accountId, userId) {
    return this.http.post(this.url + '/accounts/' + accountId + '/invitations', {invitedId: userId},
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }

  initiatePayment(accountId: any, payload) {
    return this.http.post(this.url + '/accounts/' + accountId + '/initiatedRequests', payload, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  deposit(accountId: any, payload) {
    return this.http.post(this.url + '/accounts/' + accountId + '/amount', payload, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  getReceivedPaymentRequests() {
    return this.http.get(this.url + '/users/me/receivedPaymentRequests', {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  answer(accountId, requestId, payload) {
    return this.http.post(this.url + `/accounts/${accountId}/initiatedRequests/${requestId}`, payload,
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }

  getPendingInvitations() {
    return this.http.get(this.url + '/users/me/invitations', {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }

  answerInvitation(accountId, invitationId, payload) {
    return this.http.post(this.url + `/accounts/${accountId}/invitations/${invitationId}`, payload,
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    );
  }

  pay(payload) {
    return this.http.post(this.url + '/users/me/funds', payload, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      }
    });
  }
}
