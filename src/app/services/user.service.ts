import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserModel } from 'src/app/models/user.model';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    register(user: UserModel) {
      // const params = JSON.stringify(user);
      const headers = new HttpHeaders({'Content-Type': 'application/json'});

      return this._http.post(this.url + 'register', user, {headers: headers});
    }

    login(user: UserModel) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post(this.url + 'login', user, {headers: headers});
      }

    getIdentity() {
        return JSON.parse(localStorage.getItem('identity'));
    }

    geToken() {
        return localStorage.getItem('token');
    }

    updateUser(user: UserModel) {
        const headers = new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'authorization': this.geToken()
            }
        );
        return this._http.put(this.url + 'update-user/' + user._id, user, {headers: headers});
    }
}
