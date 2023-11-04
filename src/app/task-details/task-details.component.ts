import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../models/task';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;
  isDataAvailable = false;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router:Router) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const taskId = +idParam;
      this.taskService.getTask(taskId).subscribe(
        (task) => {
          this.task = task;
          this.isDataAvailable = true;
        },
        (error) => {
          this.isDataAvailable = true;
        }
      );
    }else{
      this.router.navigate(['/tasks']);
    }
  }
}