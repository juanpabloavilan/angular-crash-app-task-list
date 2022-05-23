import { Injectable } from '@angular/core';
import {Task} from "../Task"
import { TASKS } from '../mock-tasks';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'

const HttpOptions={
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
  
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiURL='http://localhost:3004/tasks'
  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task:Task) : Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    const res = this.http.delete<Task>(url);
    console.log(res);
    return res
  }

  updateTaskReminder(task:Task) : Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    const res = this.http.put<Task>(url, task, HttpOptions);
    console.log(res);
    return res;   
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, HttpOptions)
  }
}
