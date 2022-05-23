import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task"
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task! : Task
  @Output() onDeleteEvent : EventEmitter<Task> = new EventEmitter()
  closeIcon=faTimes
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()
 
  ngOnInit(): void {
  }

  onDelete(task:Task){
    console.log(task);    
    this.onDeleteEvent.emit(task)
  }

  toggleReminder(task:Task){
    this.onToggleReminder.emit(task)
  }

}
