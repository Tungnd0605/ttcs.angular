import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit{

  task!: Task;
  

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    
  }

  submitTask() {
    debugger
    this.taskService.addTask(this.task).subscribe({
      next: _ => this.router.navigate(['/tasks']),
      error: err => console.log(err)
    })
  }
}