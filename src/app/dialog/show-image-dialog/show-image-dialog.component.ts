import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageModel } from 'src/app/_model/image-model';

@Component({
  selector: 'app-show-image-dialog',
  templateUrl: './show-image-dialog.component.html',
  styleUrls: ['./show-image-dialog.component.scss']
})
export class ShowImageDialogComponent{
  imageModel:ImageModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) data:any) {
      // Fills the imageModel property with the sent data.
      this.imageModel ={
        mainImage:data.mainImage,
        ImageName:data.imageName,
        ImageFileType:data.imageFileType,
        MainImageHeight:data.mainImageHeight,
        MainImageWidth:data.mainImageWidth,
        SmallImage:null}
     }




}
