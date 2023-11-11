import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
  {
    path: 'tasks',
    children: [
      { path: '', component: TaskListComponent },
      { path: 'add', component: TaskFormComponent },
      { path: 'edit/:id', component: TaskFormComponent }
    ]
  },
  { path: 'task-details', component: TaskDetailsComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: '', component: TaskManagerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }