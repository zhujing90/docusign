﻿import { BaseRequestOptions } from '@angular/http';

export class HttpReduxRequestOptions extends BaseRequestOptions {

    public token: string;

    constructor(angularReduxOptions?: any) {

        super();

        var user = JSON.parse(localStorage.getItem('user'));
        this.token = user && user.token;
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded'); // application/x-www-form-urlencoded
        //this.headers.append('Authorization', 'Bearer ' + this.token );

        if (angularReduxOptions != null) {

            for (let option in angularReduxOptions) {
                let optionValue = angularReduxOptions[option];
                this[option] = optionValue;
            }
        }

    }

}
