import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string
  day!: string
  reminder!: boolean
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  submitTask(){
    if(!this.text){
      alert("Completa los campos")
      return
    }

    const newTask:Task={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text=""
    this.day=""
    this.reminder=false


    
  }

}
