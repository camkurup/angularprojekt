
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ImageModel } from 'src/app/_model/image-model';

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent{
  imgFile: string = ''; // Contains the image as a string, no idea how that can work, but it appear to do so.
  fileTypes:string[] = ['png','jpg','jpeg']; // property to hold the file options.

  // In theory it should force the user to insert data, but it appears I do not actually verify that before I save.
  uploadForm = new FormGroup({
    name: new FormControl(''),
    imgType: new FormControl('', [Validators.required]),
    imgWidth: new FormControl(400, [Validators.required]),
    imgHeight: new FormControl(400, [Validators.required])
  });

  selectFormControl = new FormControl('', Validators.required); // An attempt to see if that'd help with the dropdown, but still not been able to make it work.
  constructor(private fb: FormBuilder, // I don't know what fb is used for, if I get around to work some more, I might check that I can remove it without consequence.
    private dialogRef: MatDialogRef<UploadImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {// Injects the sent data (image) to the dialog.
      this.imgFile = data.uploadedImage;
     }

  close(){ // Closes the dialog without saving the image.
    this.dialogRef.close();
   }
   save(){ // Saves the image and closes the dialog.
    let image:ImageModel = {
      mainImage: this.imgFile,
      SmallImage : this.imgFile,
      ImageName: this.uploadForm.get('name').value,
      ImageFileType: this.uploadForm.get('imgType').value,
      MainImageHeight: this.uploadForm.get('imgHeight').value,
      MainImageWidth: this.uploadForm.get('imgWidth').value,
    }
    this.dialogRef.close(image);
   }
}
