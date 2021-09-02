import { Injectable } from '@angular/core';
import { Task } from './Task';
import { TASKS } from './Tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskOperationService {

  constructor() { }

  putTask(task: Task):Observable<any>{
    // console.log(task);
    TASKS.push({
      'amount': task.amount,
      'description' : task.description,
      'taskType': task.taskType
    });
    // console.log(TASKS);

    return of();
  }

  getTasks():Array<Task>{
    return TASKS;
  }
}
