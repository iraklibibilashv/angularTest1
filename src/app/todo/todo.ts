import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select, Tasks } from '../models/products';



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

selectArr: Select[] = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
];




}

