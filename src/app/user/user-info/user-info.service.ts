import { Injectable} from '@angular/core';

@Injectable()
export class UserInfoService {
    constructor() {

    }

    public getUserInfo(): void {
        console.log("get user info...");
    }
}
