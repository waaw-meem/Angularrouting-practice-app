import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivated } from './can-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit,CanComponentDeactivated {

  task?: { id: number; name: string; assigned: string; };
  taskName = '';
  taskStatus = '';
  allowEdit = false;
  changesDone = false;


  constructor(
    private taskService:TaskService, 
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.task = this.taskService.getTask(id)
    this.taskName = this.task?.name || '';
    this.taskStatus = this.task?.assigned || ''

    this.allowEdit = id === 3;

  }

  onUpdateServer(){
    this.taskService.updateServer(this.task?.id || 0, {name: this.taskName || '', assigned: this.taskStatus || ''});
    this.changesDone = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.taskName !== this.task?.name || this.taskStatus !== this.task?.assigned) 
    && !this.changesDone) {
      return confirm('Do you want to leave?');
    } else {
      return true;
    }
  }
}
