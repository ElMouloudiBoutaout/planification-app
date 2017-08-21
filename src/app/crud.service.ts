import { Headers, Http , Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import  'rxjs/add/Observable/throw'
import { Task } from "./task/task";

@Injectable()
export class CrudService {
  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }

private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(@Inject('url') private url,private http : Http) { }

  getAllTasks(){
    return this.http.get(this.url)
    .map((response : Response) =>response = response.json())
    .catch(this.handleError);
  }

 private  _ErrorHandler(error : Response) : any{
    console.log("error" +error);
    return Observable.throw(error || "Server Error");
  }

   addTask(task: Task): Promise<Task> {
    return this.http
      .post(this.url, JSON.stringify(task), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Task)
      .catch(this.handleError);
  }

  	

    deleteTask(task : Task){
    return this.http.delete(this.url+"/"+task.id).
    map((response : Response)=>response = response.json())
    .catch(this._ErrorHandler);
  }

  updateTask(task : Task)  {
    return this.http.put(this.url+"/"+task.id,JSON.stringify(task),{headers : this.headers})
    .map((response : Response)=>console.log(response))
    .catch(this.handleError);
  }

   updateTask0(task: Task){
        return this.http.put(this.url+"/"+task.id,JSON.stringify(task),{headers : this.headers})
               .map(success => success.status)
               .catch(this.handleError);
    }

}
