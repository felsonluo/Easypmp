import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import {Router} from '@angular/router';

import { User } from '../model/user';

@Injectable()
export class LoginService {
    public userLoginURL = 'http://api.mg.local/api/User/Login';
    public subject: Subject<User> = new Subject<User>();

    constructor(public http: Http) { }

    public get currentUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public login(u: User): Observable<boolean> {

        let headers = new Headers();
        headers.append("Accept", "application/json");
        let params = new URLSearchParams();
        params.set('email', u.email);
        params.set('password', u.password);
        params.set('Email', u.email);
        params.set('Password', u.password);
        let options = new RequestOptions({ headers: headers, search: params, responseType: ResponseContentType.Json });

        return this.http
            .get(this.userLoginURL, options)
            .map((res: Response) => res.json());
    }

    public logout(): void {
        localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
    }
}
