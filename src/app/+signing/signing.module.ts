import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { routing } from './signing.router';
import { SigningComponent } from './signing.component';
import { BsDropdownModule, ModalModule  } from 'ngx-bootstrap';

@NgModule({
    imports:
        [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            FileUploadModule,
            BsDropdownModule.forRoot(),
            ModalModule.forRoot(),
            routing
        ],

    exports: [],

    declarations:
        [
            SigningComponent
        ],

    entryComponents:
        [
        ],

    providers:
        [
        ],

})

export class SigningModule {


}