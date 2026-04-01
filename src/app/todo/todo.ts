import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select, Tasks } from '../models/products';



@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule,],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  editId : number | null = null
  editTitle: string = ""
  editValue : number = 1;
  editCategory : string = "";
  darkMode: boolean = false;
  selectedValue: number = 1;
  newTask = ""
  sortOrder : `asc` | `desc` = `asc`;
  azSortOrder :  `asc` | `desc` = `asc`;
  newCategory: string = 'Work';
  taskArr : Tasks[] = []
  categories: string[] = ['Work', 'Personal', 'Study', 'Other'];
  filterProducts : Tasks[] = []
  filterCategory : string = "All";
  filterTitle : Tasks[] = []
  name = ""
  

@HostBinding('class.dark') get isDark() {
  return this.darkMode;
}

  ngOnInit(){
      this.taskArr = JSON.parse(localStorage.getItem("taskToken") || "[]" )
      document.body.style.backgroundColor = '#f4f3ff';
      this.filterTitle = [...this.taskArr]
      this.filter()
  }

    addTask(){
    this.taskArr.push({
      id : Date.now(),
      title : this.newTask,
      completed : false,
      category : this.newCategory,
      value : this.selectedValue
    })
    this.newTask = ""
    this.selectedValue = 1
    console.log(this.taskArr);
    this.localStorageSetItem()
    this.filter()
    
  }
  startEdit(item : any) {
    this.editId = item.id;
    this.editTitle = item.title;
    this.editValue = item.value;
    this.editCategory = item.category;
  }
  saveEdit(item : any) {
    item.title = this.editTitle;
    item.value = this.editValue;
    item.category = this.editCategory;
    this.editId = null;
    this.localStorageSetItem();
    this.filter()
  }
  cancelEdit() {
    this.editId =  null;
  }

  filter(){
    this.filterProducts = this.taskArr
    this.filterProducts = this.taskArr.filter(el => 
      el.title?.toLowerCase().includes(this.name.toLowerCase()) && (this.filterCategory === `All` || el.category === this.filterCategory)
  )
  }
  filteredTasks() {
    if(this.filterCategory === "All") {
      return this.taskArr
    }
    return this.taskArr.filter(task => task.category === this.filterCategory)
  }

  getPriorityClass(value: number) {
  if (value >= 1 && value <= 3) return 'high';
  if (value >= 4 && value <= 7) return 'medium';
  if (value >= 8 && value <= 10) return 'low';
  return '';
}

  toggleSortSelect(){
    this.sortOrder = this.sortOrder === `asc` ? `desc` : `asc`;
    this.filterProducts.sort((a,b) => {
      return this.sortOrder === `asc`
      ? a.value - b.value
      : b.value - a .value;
      
    })
  }
  toggleSortAZ(){
     this.azSortOrder = this.azSortOrder === `asc` ? `desc` : `asc`;
     this.filterProducts.sort((a,b) => {
      return this.azSortOrder === `asc`
      ? a.title.trim().localeCompare(b.title.trim())
      : b.title.trim().localeCompare(a.title.trim())
     })
  }
  
  toggleDark(){
    this.darkMode = !this.darkMode
    document.body.style.backgroundColor = this.darkMode ? '#1a1830' : '#f4f3ff';
  }




  completedTask(obj : any){
    obj.completed = !obj.completed
    this.localStorageSetItem()

  }

  deleteTask(obj : any){
    this.taskArr = this.taskArr.filter(ele => ele.id != obj.id)
     this.localStorageSetItem()
     this.filter()

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

