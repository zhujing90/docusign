﻿
import { Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {
    public sessionStorage: any;

    constructor() {
        if (!sessionStorage) {
            throw new Error('Current browser does not support session Storage');
        }
        this.sessionStorage = sessionStorage;
    }

    public set(key: string, value: string): void {
        this.sessionStorage[key] = value;
    }

    public get(key: string): string {
        return this.sessionStorage[key] || null;
    }

    public setObject(key: string, value: any): void {
        this.sessionStorage[key] = JSON.stringify(value);
    }

    public getObject(key: string): any {
        return JSON.parse(this.sessionStorage[key] || '{}');
    }

    public remove(key: string): any {
        this.sessionStorage.removeItem(key);
    }
}