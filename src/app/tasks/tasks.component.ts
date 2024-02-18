import { Component, OnInit } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks:{id:number,name:string,assigned:string}[] = []

  constructor(private taskservice:TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskservice.getTasks()
  }

}
