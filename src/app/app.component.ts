import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tasks = [
    { name: 'Lavar roupas', completed: true },
    { name: 'Fazer trabalho da faculdade', completed: false }
  ];

  newTask: string = "";
  editingIndex: number | null = null;  // Índice da tarefa que está sendo editada

  addTask(){
    if (this.newTask.trim() !== '') {
      this.tasks.push({name: this.newTask, completed: false});
      this.newTask = "";    
    }
  }

  editTask(index: number) {
    this.editingIndex = index;  // Define a tarefa que está sendo editada
  }

  saveTask() {
    this.editingIndex = null;
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }

  capitalizeFirstLetter(value: string): string {
    if (value && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }

  onTaskNameInput(index: number) {
    this.tasks[index].name = this.capitalizeFirstLetter(this.tasks[index].name);
  }

  onInputNewTask() {
    this.newTask = this.capitalizeFirstLetter(this.newTask);
  }  

}