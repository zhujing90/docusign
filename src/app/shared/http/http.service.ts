import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router"
import 'rxjs/Rx';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';
import {Md2Toast} from 'md2/toast/toast';
import { HttpReduxRequestOptions } from './http-redux-request.options';

import { LoaderService } from '../loader/loader.service';
import * as myGlobals from '../../globals'; //import global Variables

@Injectable()
export class HttpService extends Http {

    apiUrl = myGlobals.ApiUrl;
    //apiUrl = 'http://172.27.1.80:8012/api/';
    //apiUrl = 'http://172.27.1.203:8012/api/'

    constructor(
        backend: XHRBackend,
        defaultOptions: HttpReduxRequestOptions,
        private loaderService: LoaderService,
        private _router?: Router,
        private _Md2Toast?:Md2Toast
    ) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {

        this.showLoader();

        return super.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });

    }
    post(url: string, body, options?: RequestOptionsArgs): Observable<Response> {

        this.showLoader();

        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });

    }
    put(url: string, body, options?: RequestOptionsArgs): Observable<Response> {

        this.showLoader();

        return super.put(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });

    }
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {

        this.showLoader();

        return super.delete(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new HttpReduxRequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        return options;
    }

    private getFullUrl(url: string): string {
        console.log(this.apiUrl + url);
        return this.apiUrl + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
        switch (res.status) {
            case 405:
                sessionStorage.clear();
                this._Md2Toast.show('Login Time Out,Please relogin.');
                this._router.navigate(["home"]);
                break;
        }
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }
    private hideLoader(): void {
        this.loaderService.hide();
    }

}