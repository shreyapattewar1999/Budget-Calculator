import { Injectable } from '@angular/core';
import { Task } from './Task';
import { TASKS } from './Tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskOperationService {

  constructor() { }

  balance : number = 0;
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

  getBalanceAmount(): number{
    this.balance = TASKS.reduce((acc, curr) => {
      if (curr.taskType === "Income"){
        acc = acc + Number(curr.amount);
      }
      else if(curr.taskType === "Expense"){
        acc = acc - Number(curr.amount)
      }
      return acc;
    },0);
    
    return this.balance;
  }
}
