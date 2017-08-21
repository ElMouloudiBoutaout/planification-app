import { Title } from '@angular/platform-browser';
import { Task } from './task';
import { CrudService } from '../crud.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit,AfterViewInit  {
  source: LocalDataSource;
  errorMsg: string;
  tasks : Task[];
@Output() dataEvent = new EventEmitter();

  constructor(private crud: CrudService) {
    this.source = new LocalDataSource();
  }
  ngOnInit() {
    this.crud.getAllTasks().subscribe(tasks => {
       this.source.load(tasks.content);
       this.tasks = tasks.content;
    },
      errorResponse => this.errorMsg = errorResponse);
  }

  ngOfet

  createTask(task: Task): void {
    this.crud.addTask(task).then
      (task => { this.source.append(task);});
  }

  deleteTask(task : Task){
  this.crud.deleteTask(task).subscribe();
}  

updateTask(task : Task){
    this.crud.updateTask0(task).subscribe(task=>console.log(task));
}

  table = {
     add : {
        confirmCreate : true
      },
      delete : {
        confirmDelete : true,
      },
      edit:{
        confirmSave : true,
        mode : 'inline'
      },
    columns: {
      id : {
        tite : 'ID'
      },
      name: {
        title: 'Name',
        editable: false
      },
      startD: {
        title: 'Start',
        editable: false
      },
      endD: {
        title: 'End',
        editable: false
      },
      note: {
        title: 'Note'
      },
      done: {
        title: 'done',
        editor: { 'type': 'checkbox' }
      }
    }
  };


 onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      let task = new Task(null,event.newData.name,event.newData.note
                         ,event.newData.done,event.newData.startD,event.newData.endD)
      console.log(task);                   
      event.confirm.resolve(event.newData);
      this.createTask(task);
    } else {
      event.confirm.reject();
    }
}

onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.deleteTask(event.data);
    } else {
      event.confirm.reject();
    }
}

 onUpdate(event) {
    if (window.confirm('Are you sure you want to update?')) {
       let task = new Task(event.newData.id,event.newData.name,event.newData.note
                         ,event.newData.done,event.newData.startD,event.newData.endD)
      event.confirm.resolve(event.newData);
       this.updateTask(task);
    } else {
      event.confirm.reject();
    }
}

sendData(){
  this.dataEvent.emit(this.source);
  console.log(1);
  console.log(this.source);
    console.log(1);

}


    public ngAfterViewInit(): void {
      this.sendData();
    }
}
