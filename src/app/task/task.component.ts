import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { TaskOperationService } from '../task-operation.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task = { amount: 0, description: '', taskType: '' };
  constructor(public taskService: TaskOperationService) {}
  // taskForm : Form =;
  // taskType : any;

  c = 0
  ngOnInit(): void {
  }

  onSubmit() {
    
    this.taskService.putTask(this.task).subscribe();
    this.task.amount = 0;
    this.task.description = '';
    this.c += 1;
    // return this.taskService.getTasks().subscribe((tasks:any) => {this.tasks_list = tasks});

  }


}

