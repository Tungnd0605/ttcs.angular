import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {

  taskForm!: FormGroup;
  id?: string;
  isAddMode?: boolean;

  constructor(private taskService: TaskService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.initForm();
  }

  initForm() {
    this.taskForm = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      description: [''],
      startedDate: [null],
      dueDate: [null, Validators.required],
      completed: [false]
    });

    if (!this.isAddMode) {
      this.taskService.getTask(+this.id!).subscribe({
        next: u => this.taskForm.patchValue(u)
      })
    }
  }

  onSubmit() {

    if (this.taskForm.valid) {
      const task = this.taskForm.value as Task;
      console.log(task);

      // Create
      if (this.isAddMode) {
        this.taskService.addTask(task).subscribe({
          next: _ => {
            this.toastr.success("Task added successfully!"),
              this.router.navigate(['/task-list'])
          },
          error: err => this.toastr.error(err.error)
        })
      }
      // Update
      else {
        this.taskService.updateTask(task).subscribe({
          next: _ => {
            this.toastr.success("Task updated successfully!"),
              this.router.navigate(['/task-list'])
          },
          error: err => this.toastr.error(err.error)
        })
      }
    } else {
      this.toastr.error("Please fill all required field!")
    }


  }
}