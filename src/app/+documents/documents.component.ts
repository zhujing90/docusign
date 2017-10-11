import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openUploadModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}