//lib
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { XHRBackend, RequestOptions } from '@angular/http';
import {
    MdProgressBarModule,
    MdSidenavModule,
    MdIconModule
} from '@angular/material';
import { SignaturePadModule } from 'angular2-signaturepad';

//router
import { rootRouters } from './app.routes';

//components
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

//modules
import { HomeModule } from './home/home.module';

//service
import { UserLoginService } from './user/user-login/user-login.service';
import { Signature2Service } from './+signature2/signature2.service';
import { UserInfoService } from './user/user-info/user-info.service';
import { HttpService } from './shared/http/http.service';
import { httpServiceFactory } from './shared/http/http-service.factory';
import { HttpReduxRequestOptions } from './shared/http/http-redux-request.options';
import { LoaderService } from './shared/loader/loader.service';
import { NavComponent } from './nav/nav.component';


@NgModule({
    declarations: [
        AppComponent,
        UserLoginComponent,
        LoaderComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        FormsModule,
        rootRouters,
        HomeModule,
        MdProgressBarModule,
        MdSidenavModule,
        MdIconModule,
        SignaturePadModule
    ],
    exports: [],
    providers: [
        UserLoginService,
        Signature2Service,
        UserInfoService,
        LoaderService,
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService ]
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
