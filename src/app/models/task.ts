export interface Task {
  id: number;
  title: string;
  description: string;
  startedDate: Date;
  dueDate: Date;
  completed: boolean;
}