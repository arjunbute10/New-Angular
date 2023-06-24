import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatLabel, MatNativeDateModule, MatSelectModule, MatSlideToggleModule, MatStepperModule, matDialogAnimations } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import{MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './filter.pipe'
import { ProjectTaskComponent } from './project-task/project-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectTaskComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents : [HomeComponent]

})
export class AppModule { }

