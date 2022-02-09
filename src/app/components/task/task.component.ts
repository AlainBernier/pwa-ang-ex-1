import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  task: Task = {
    text: "Rendez-vous chez le coiffeur",
    date: new Date()
  }
 
 

  ngOnInit(): void {
  }

}
