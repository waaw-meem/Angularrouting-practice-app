import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent implements OnInit {
  task?: { id: number; name: string; assigned: string; };

  constructor(
    private taskservice:TaskService,
    private route:ActivatedRoute,
    private router:Router
    ){}

 

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.task = this.taskservice.getTask(id)
    
    this.route.params.subscribe((params:Params) => {
      this.task = this.taskservice.getTask(+params['id']);
    })
  }

  EditServer(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }


}
