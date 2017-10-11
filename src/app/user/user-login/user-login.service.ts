import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterModule, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map'
import { HttpService } from '../../shared/http/http.service';

@Injectable()
export class UserLoginService {
    public hasLogin: boolean = false;
    public token: string;
    constructor(
        private _router: Router,
        private http: HttpService) {
    }
    //post to login
    public login(usermodel): Observable<Response> {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', usermodel.username);
        urlSearchParams.append('password', usermodel.password);
        let body = urlSearchParams.toString()

        return this.http.post("user/show", body);
    }

    public logout(): void {
        console.log("user login service logout...");
        this.hasLogin = false;
    }
}
