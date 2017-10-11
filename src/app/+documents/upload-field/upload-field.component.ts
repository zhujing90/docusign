import { Component, OnInit, Directive } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import * as myGlobals from '../../globals'; //import global Variables

@Component({
  selector: 'upload-field',
  templateUrl: './upload-field.component.html',
  styleUrls: ['./upload-field.component.css']
})
export class UploadFieldComponent implements OnInit {
  public showUpload:boolean = true;
  public showViewed:boolean = false;
  public coverUrl: string = '';
  constructor() { }

  // B: 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader:FileUploader = new FileUploader({
    url: myGlobals.ApiUrl + 'upload/do_upload',
    method: "POST",
    itemAlias: "uploadedfile",
    autoUpload: true
  });
  // C: 定义事件，选择文件
  selectedFileOnChanged(event:any) {
    // 打印文件选择名称
    console.log(event.target.value);

  }
  // D: 定义事件，上传文件
  uploadFile() {

    // 上传
    this.uploader.queue[0].onSuccess =  (response, status, headers)  => {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        if(tempRes['document_id'] && tempRes['images']) {

          this.showUpload = false;
          this.showViewed = true;
          this.coverUrl = myGlobals.ApiUrl + tempRes['images'][0];
          console.log(this)
        }

      } else {
        // 上传文件后获取服务器返回的数据错误
        alert("error");
      }
    }
    this.uploader.queue[0].upload(); // 开始上传
  }


  ngOnInit() {
  }


}

