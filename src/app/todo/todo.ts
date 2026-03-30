import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tasks } from '../models/products';



@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  ngOnInit(){
      this.taskArr = JSON.parse(localStorage.getItem("taskToken") || "" )
  }


  newTask = ""
  taskArr : any[] = []
  

  addTask(){
    this.taskArr.push({
      id : this.taskArr.length+1,
      title : this.newTask,
      completed : false
    })
    this.newTask = ""
    console.log(this.taskArr);
    this.localStorageSetItem()
    
  }

  completedTask(obj : any){
    obj.completed = !obj.completed
    this.localStorageSetItem()

  }

  deleteTask(obj : any){
    this.taskArr = this.taskArr.filter(ele => ele.id != obj.id)
     this.localStorageSetItem()

  }


  localStorageSetItem(){
    return  localStorage.setItem("taskToken", JSON.stringify(this.taskArr))
  }

}

