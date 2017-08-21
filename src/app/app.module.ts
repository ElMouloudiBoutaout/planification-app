import { CrudService } from './crud.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, Ng2SmartTableModule, ChartsModule
  ],
  providers: [CrudService, { provide: 'url', useValue: 'http://localhost:8080/tasks' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
