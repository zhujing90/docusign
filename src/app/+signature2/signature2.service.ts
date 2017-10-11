import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterModule, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map'
import { HttpService } from '../shared/http/http.service';

@Injectable()
export class Signature2Service {
    public token: string;
    constructor(
        private _router: Router,
        private http: HttpService) {
    }
    //post to login
    public AddNew(signaturemodel): Observable<Response> {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('fullname', signaturemodel.fullname);
        urlSearchParams.append('initial', signaturemodel.initial);
        let body = urlSearchParams.toString()

        return this.http.post("upload/new_signature", body);
    }

}