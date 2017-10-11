import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './signature2.router';
import { Signature2Component } from './signature2.component';

@NgModule({
    imports:
        [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            SignaturePadModule,
            routing
        ],

    exports: [],

    declarations:
        [
            Signature2Component
        ],

    entryComponents:
        [
        ],

    providers:
        [
        ],

})

export class Signature2Module {


}