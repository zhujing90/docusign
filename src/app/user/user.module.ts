import { NgModule } from '@angular/core';
import { UserLoginService } from './user-login/user-login.service';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
    declarations: [
        UserLoginComponent
    ],
    imports: [

    ],
    providers: [
        UserLoginService
    ]
})
export class UserModule { }