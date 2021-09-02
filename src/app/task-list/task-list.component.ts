import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskOperationService } from '../task-operation.service';
import { TASKS } from '../Tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges {

  @Input() c:any;

 income_list :any;
  // income_list : Array<Task>=[];
  expense_list : any;
  tasks_list : any;
  
  constructor(public taskService:TaskOperationService) {
  }  
  
  ngOnChanges() : void{
    this.tasks_list = this.taskService.getTasks();
    // console.log(this.tasks_list[0].taskType);
    this.income_list = this.tasks_list.filter((task:any) =>  task.taskType == "Income");
    this.expense_list = this.tasks_list.filter((task:any) =>  task.taskType == "Expense");

    // console.log(typeof this.income_list[0]);
    // console.log(this.expense_list);
    
  }

  
  ngOnInit(): void {

  }

  

}
// console.log(this.tasks_list); 
//     this.income_list = this.tasks_list.filter((task : any) => {
//       return task.taskType === "income"; 
//     })

//     this.expense_list = this.tasks_list.filter((task:any) => {
//       return task.taskType  === "expense";
//     })
//     console.log(this.income_list);
//     console.log(this.expense_list);