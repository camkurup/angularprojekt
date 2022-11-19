import { ShowImageDialogComponent } from './../dialog/show-image-dialog/show-image-dialog.component';
import { PictureServiceService } from './../_service/picture-service.service';
import { Component} from '@angular/core';
import { ImageModel } from '../_model/image-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.scss']
})
export class ShowImagesComponent{

  // Sets the variables to show in the table in HTML.
  displayedColumns:string[] = ['mainImage', 'ImageName', 'ImageFileType', 'MainImageHeight', 'MainImageWidth']; 
  dataSource = this.imageService.getAllPictures(); // Gets all the pictures from the ImageService.
  //clickedRows = new Set<ImageModel>();
  constructor(private dialog: MatDialog, private imageService: PictureServiceService) {}

  showImage(image:ImageModel):void{ // Opens a dialog with the image.
    //console.log("Clicked and running. ",image); // debug log
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      mainImage:image.mainImage,
      imageName:image.ImageName,
      imageFileType:image.ImageFileType,
      mainImageHeight:image.MainImageHeight,
      mainImageWidth:image.MainImageWidth
    };
    this.dialog.open(ShowImageDialogComponent, dialogConfig);
  }

}
