import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="Task Tracker"
  isToogleAddTask:boolean = false
  subscriptionToogleAddTask : Subscription;

  constructor(private uiService : UiService) {
    this.subscriptionToogleAddTask = uiService.onToogle().subscribe((addTasktoggleValue)=> this.isToogleAddTask=addTasktoggleValue )
  }

  ngOnInit(): void {
  }

  desplegarAddTask(){
    this.uiService.toggleAddTask()
    console.log("despleagar add task !!");
    
  }

}
