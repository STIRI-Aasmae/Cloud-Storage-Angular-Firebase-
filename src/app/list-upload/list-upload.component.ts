import { Component, OnInit, Input, Pipe, PipeTransform} from '@angular/core';
import { map } from 'rxjs/operators';
import {FileUpload} from '../fileupload';
import { UploadFileService } from 'src/app/services/upload-file.service';
import * as firebase from 'firebase/app'
import { __metadata } from 'tslib';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
  downloadURL;
  fname;
  fsize;
  ftype;
  metadatafile;
  fileUploads: any[];
  @Input() fileupload: FileUpload;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.uploadService.getFileUploads(100).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  deleteFileUpload(fileupload) {
    this.uploadService.deleteFileUpload(fileupload);
  }

  private basePath = '/uploads';
  download(fileupload: FileUpload){
    var name:string = fileupload.name; 
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).getDownloadURL().then(function(url){ 
      this.downloadURL=url;   
      
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
  
    }).catch(function(error) {
      console.log(error);
    });
  }

}
