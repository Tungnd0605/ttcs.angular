import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: _ => {
        //reload
        window.location.reload();
        this.toastr.success("Task deleted!")
      },
      error: err => this.toastr.error(err.error)
    });
  }

  setCompletion(t: Task) {
    t.completed = !t.completed
    this.taskService.updateTask(t).subscribe({
      next: _ => this.toastr.success("Change success!"),
      error: err => this.toastr.error(err.error)
    })
  }
}