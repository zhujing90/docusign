import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    ErrorMessage: string;
    Islogin: boolean = true;
    LoginText: string = "Login";
    usermodel: any;
    constructor(
        private _router: Router,
        private userLoginService: UserLoginService
    ) {
        this.usermodel = {};
    }
    ngOnInit() {
    }

    doLogin(loginForm) {
        this.Islogin = false;
        this.ErrorMessage = "";
        this.LoginText = "Processing";
        this.userLoginService.login(loginForm.value)
            .subscribe((data: Response) => {
                if (data) {
                    this.Islogin = true;
                    this.LoginText = "Login";
                    let jsonstring = JSON.stringify(data.json());
                    let jsonObject = JSON.parse(jsonstring);

                    //this._router.navigate(['home']);
                }
            },
            response => {
                this.Islogin = true;
                this.ErrorMessage = "Login Failed.";
                this.LoginText = "Login";
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });

    };

    public doLogout(): void {
        this.userLoginService.logout();
    }

    public forgetPwd(): void {

    }

    public cancel() {
        this._router.navigate(['home']);
    }
}