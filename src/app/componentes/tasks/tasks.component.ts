import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksList: Task[] = []
  isToggleAddTask : boolean = false;

  constructor(private taskService: TaskServiceService, private uiService:UiService) {
    this.uiService.onToogle().subscribe(addTaskToggleValue=> this.isToggleAddTask=addTaskToggleValue)
   }

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks) => {
        this.tasksList = tasks
      })
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => {
          this.tasksList = this.tasksList
            .filter(
              tarea => tarea.id !== task.id
            )
        }
      )
  }

  updateReminder(task : Task){
    task.reminder=!task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe(tarea => this.tasksList.push(tarea))
  }

}
