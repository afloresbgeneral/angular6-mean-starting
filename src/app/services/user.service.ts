import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';
import { UserModel } from 'src/app/models/user.model';

@Injectable()
export class UserService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    register(user: UserModel) {
      const params = JSON.stringify(user);
      const headers = new HttpHeaders({'Content-Type': 'application/json'});

      return this._http.post(this.url + 'register', params, {headers: headers});
    }
}
