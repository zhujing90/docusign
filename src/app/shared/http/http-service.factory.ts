import { XHRBackend } from '@angular/http';
import { HttpReduxRequestOptions } from './http-redux-request.options';
import { HttpService } from './/http.service';
import { LoaderService } from '../loader/loader.service';
import { Router } from "@angular/router";
import {Md2Toast} from 'md2/toast/toast';
function httpServiceFactory(backend: XHRBackend, options: HttpReduxRequestOptions, loaderService: LoaderService,router:Router,_Md2Toast:Md2Toast) {
    return new HttpService(backend, options, loaderService,router,_Md2Toast);
}

export { httpServiceFactory };
