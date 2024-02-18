import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TasksComponent } from "./tasks/tasks.component";
import { SingletaskComponent } from "./tasks/singletask/singletask.component";
import { EdittaskComponent } from "./tasks/edittask/edittask.component";
import { ErrorHandlingComponent } from "./error-handling/error-handling.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivatedGuard } from "./tasks/edittask/can-deactivate.service";

const appRoute: Routes = [
    {path:'',component:HomeComponent},
    {path:'tasks',
    // canActivate:[AuthGuard],
    // canActivateChild:[AuthGuard],
    component:TasksComponent,
    children:[
        {path:':id',component:SingletaskComponent},
        {path:':id/edit',component:EdittaskComponent,canDeactivate:[CanDeactivatedGuard]},
    ]},   
    {path:'not-found',component:ErrorHandlingComponent},
    {path:'**',redirectTo:'/not-found'}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})

export class RouteAppComponent{

}