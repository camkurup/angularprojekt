
import { Injectable } from '@angular/core';
import { ImageModel } from '../_model/image-model';

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {
  images:ImageModel[] = []; // Array to hold the pictures with data.
  constructor() { }

  getAllPictures():ImageModel[]{ // Method that returns the entire list of pitures
    return this.images;
  }
  savePicture(newImage:ImageModel):void{ // Adds a picture to the array.
    this.images.push(newImage);
  }
}
