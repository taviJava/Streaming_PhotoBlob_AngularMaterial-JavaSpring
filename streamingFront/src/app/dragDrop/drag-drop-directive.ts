import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})

export class DragDropDirective {
  fileList: FileList;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';


  // tslint:disable-next-line:typedef
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }

  // tslint:disable-next-line:typedef
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
  }

  // Drop listener
  // tslint:disable-next-line:typedef
  @HostListener('drop', ['$event']) public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    this.fileList = evt.dataTransfer.files;
    this.onFileDropped.emit(this.fileList);
  }
}
