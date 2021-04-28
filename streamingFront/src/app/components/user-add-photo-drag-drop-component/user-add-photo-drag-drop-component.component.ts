import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add-photo-drag-drop-component',
  templateUrl: './user-add-photo-drag-drop-component.component.html',
  styleUrls: ['./user-add-photo-drag-drop-component.component.css']
})
export class UserAddPhotoDragDropComponentComponent implements OnInit {
  files: any = [];
  constructor() {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  uploadFile(event: any) {
    if (event instanceof FileList){
      this.files.push(event.item(0));
    }else {
      this.files.push(event.target.files[0]);
    }
  }
  // tslint:disable-next-line:typedef
  deleteAttachment(index: any) {
    this.files.splice(index, 1);
  }
}
