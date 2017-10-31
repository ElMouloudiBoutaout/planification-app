import { CrudService } from './services/crud.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DatePipe } from '@angular/common';
import { LoginService } from "./services/login.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ChartComponent,
    AgendaComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, Ng2SmartTableModule, ChartsModule
  ],
  providers: [CrudService,LoginService,DatePipe,{ provide: 'url', useValue: 'http://localhost:8080/tasks' },
  { provide: 'homeUrl', useValue: 'http://localhost:8080' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
