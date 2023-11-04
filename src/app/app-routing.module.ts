import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
  { path: '', redirectTo: 'task-manager', pathMatch: 'full' },
  { path: 'task-manager', component: TaskManagerComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'task-details', component: TaskDetailsComponent },
  { path: 'task-list', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}