import { ShowImagesComponent } from './show-images/show-images.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'upload', component:UploadComponent},
  {path:'show', component:ShowImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
