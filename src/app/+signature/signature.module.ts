import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './signature.router';
import { SignatureComponent } from './signature.component';
import { SignatureFieldComponent } from './signature-field/signature-field.component';

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
            SignatureComponent,
            SignatureFieldComponent
        ],

    entryComponents:
        [
        ],

    providers:
        [
        ],

})

export class SignatureModule {


}