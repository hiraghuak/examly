import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {ChartModule} from 'primeng/chart';

import { AppComponent } from './app.component';
import { RecruitmentcourseComponent } from './recruitmentcourse/recruitmentcourse.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    AppComponent,
    RecruitmentcourseComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ProgressBarModule,
    ChartModule,
    NgCircleProgressModule.forRoot({
      radius: 30,
      backgroundPadding: 1,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      showTitle: false,
      outerStrokeLinecap: 'square',
      outerStrokeColor: '#2a9f90',
      innerStrokeColor: '#ffffff',
      animationDuration: 300,
      subtitleFontSize: '25'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

