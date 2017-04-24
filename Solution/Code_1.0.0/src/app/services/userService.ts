import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../model/user';

@Injectable()
export class UserService {

    public userListUrl = "http://api.mg.local/api/user/GetEmailList";

    constructor(public http: Http) { }

    public getUserList(): Observable<string[]> {

        let headers = new Headers();
        headers.append("Accept", "application/json");
        let params = new URLSearchParams();
        //params.set('myParam', 'myValue');
        let options = new RequestOptions({ headers: headers, search: params, responseType: ResponseContentType.Json });

        return this.http.get(this.userListUrl, options)
            .map((res: Response) => res.json())
    }
}