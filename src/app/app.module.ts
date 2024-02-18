import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { SingletaskComponent } from './tasks/singletask/singletask.component';
import { EdittaskComponent } from './tasks/edittask/edittask.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RouteAppComponent } from './app-routing.module';
import { TaskService } from './tasks/tasks.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { UserAuth } from './auth.service';
import { CanDeactivatedGuard } from './tasks/edittask/can-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    SingletaskComponent,
    EdittaskComponent,
    ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    RouteAppComponent,
    FormsModule
  ],
  providers: [TaskService,AuthGuard,UserAuth,CanDeactivatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
