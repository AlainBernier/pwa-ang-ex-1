import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task!: Task; 

  ngOnInit(): void {
  }

}
