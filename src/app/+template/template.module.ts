import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { routing } from './template.router';
import { TemplateComponent } from './template.component';
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
            TemplateComponent
        ],

    entryComponents:
        [
        ],

    providers:
        [
        ],

})

export class TemplateModule {


}