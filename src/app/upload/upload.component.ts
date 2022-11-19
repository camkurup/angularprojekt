
import { PictureServiceService } from './../_service/picture-service.service';
import { UploadImageDialogComponent } from './../dialog/upload-image-dialog/upload-image-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  imgFile: string = ''; // Holds the image as a string.

  uploadForm = new FormGroup({
   //name: new FormControl('', [Validators.required]),
   file: new FormControl('', [Validators.required]),
   //imgSrc: new FormControl('', [Validators.required])
 });
  constructor(private dialog: MatDialog, private imageService:PictureServiceService) { }
  ngOnInit(): void {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      uploadedImage: this.imgFile
    };

    //this.dialog.open(UploadImageDialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(UploadImageDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          //console.log("Dialog output:", data); // debug log
        if (data === undefined) { // if there is no returned data, reset the form control.
          this.imgFile = '';
          this.uploadForm.reset();
        }
        else{
          //console.log("Dialog output:", data); // debug log
          this.imageService.savePicture(data); // Calles the ImageService to save the image and data.
        }
  });
}

  get uf(){
    return this.uploadForm.controls;
  }

  onImageChange(e:any) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          //imgSrc: reader.result
        });
        this.openDialog();

      };
    }
  }

}
