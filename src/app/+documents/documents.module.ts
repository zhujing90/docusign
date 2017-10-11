import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { routing } from './documents.router';
import { DocumentsComponent } from './documents.component';
import { BsDropdownModule, ModalModule  } from 'ngx-bootstrap';
import { UploadFieldComponent } from './upload-field/upload-field.component';

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
            DocumentsComponent,
            UploadFieldComponent
        ],

    entryComponents:
        [
        ],

    providers:
        [
        ],

})

export class DocumentsModule {


}