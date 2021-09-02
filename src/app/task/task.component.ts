import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
// import { EventEmitter } from 'stream';
import { TaskOperationService } from '../task-operation.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task = { amount: 0, description: '', taskType: '' };
  balanceAmt = 0;
  constructor(public taskService: TaskOperationService) {}
  // taskForm : Form =;
  // taskType : any;

  @Output() sendBalanceAmount = new EventEmitter();
  c = 0
  ngOnInit(): void {
  }

  onSubmit() {
    
    this.taskService.putTask(this.task).subscribe();
    this.task.amount = 0;
    this.task.description = '';
    this.c += 1;
    // return this.taskService.getTasks().subscribe((tasks:any) => {this.tasks_list = tasks});
    this.balanceAmt = this.taskService.getBalanceAmount();
    this.sendBalanceAmount.emit(this.balanceAmt);

  }


}

