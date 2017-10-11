import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { Response } from '@angular/http';
import { Signature2Service } from './signature2.service';

@Component({
  selector: 'app-signature2',
  templateUrl: './signature2.component.html',
  styleUrls: ['./signature2.component.css']
})

export class Signature2Component implements OnInit {
  sigForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private signature2Service: Signature2Service
  ) {
    this.sigForm = this.fb.group({
      fullname: new FormControl('', [<any>Validators.required, Validators.minLength(2)]),
      initial: new FormControl('', [<any>Validators.required, Validators.minLength(2)])
    });
  }

  ngOnInit() {
    this.sigForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  //存储错误信息
  formValues = {
    'fullname': '',
    'initial': ''
  };

  /**
   * 表单值改变时，重新校验
   * @param data
   */
  onValueChanged(data) {
    this.formValues['fullname'] = data.fullname;
    this.formValues['initial'] = data.initial;
  }

  submitForm(sigForm) {
    this.signature2Service.AddNew(sigForm.value)
        .subscribe((data: Response) => {
              if (data) {
                let jsonstring = JSON.stringify(data.json());
                let jsonObject = JSON.parse(jsonstring);

                //this._router.navigate(['home']);
              }
            },
            response => {
              console.log("POST call in error", response);
            },
            () => {
              console.log("The POST observable is now completed.");
            });
  }


}
