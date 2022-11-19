import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { UploadImageDialogComponent } from './dialog/upload-image-dialog/upload-image-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { ShowImagesComponent } from './show-images/show-images.component';
import { ShowImageDialogComponent } from './dialog/show-image-dialog/show-image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    UploadImageDialogComponent,
    ShowImagesComponent,
    ShowImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    MatTableModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UploadImageDialogComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
