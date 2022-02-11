import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  text: string = "";
  date: string = "";

  @Output() userActvityCompleted = new EventEmitter();

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }
  onSubmit() : void {
    if (this.text.length >0) { 
    this.taskService.createNewTask(this.text, new Date());
     }
    this.text = "";
    this.date = "";
    
  }

  
onCancel() : void {
  this.text = "";
  this.date = "";
  this.userActvityCompleted.emit();
}


  }
 

