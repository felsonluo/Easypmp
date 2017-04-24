import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Navigator } from '../model/navigator';

@Injectable()
export class NavigatorService {

    public navigatorListUrl = "http://api.mg.local/api/navigator/GetNavigator";

    constructor(public http: Http) { }

    public getNavigatorList(): Observable<Navigator[]> {

        let headers = new Headers();
        headers.append("Accept", "application/json");
        let params = new URLSearchParams();
        let options = new RequestOptions({ headers: headers, search: params, responseType: ResponseContentType.Json });

        return this.http.get(this.navigatorListUrl, options)
            .map((res: Response) => res.json());
    }
}