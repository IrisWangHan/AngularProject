import { Component } from '@angular/core';
import { TodoItemInterface } from '../models/todo.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  listName = "ToDoList For Angular";
  placeholder = "請輸入待辦事項";
  listItems: TodoItemInterface[] = [
    { name: "Item 1", completed: false, isEdit: false },
    { name: "Item 2", completed: false, isEdit: false },
    { name: "Item 3", completed: false, isEdit: false },
    { name: "Item 4", completed: false, isEdit: false },
    { name: "Item 5", completed: false, isEdit: false },
  ];

  // 輸入完畢 將輸入內容加入清單
  addItem(itemContent: string) {
    console.log(itemContent);
    this.listItems.push(
      {
        name: itemContent,
        completed: false,
        isEdit: false
      }
    ); console.log(this.listItems);
    itemContent = ""; // 清空輸入框
  }

  // 刪除清單項目
  removeItem(index: number) {
    //splice (起始位置, 刪除數量)
    this.listItems.splice(index, 1);
  }

  //編輯清單項目
  editItem(index: number) {
    console.log("editItem", index);
    this.listItems[index].isEdit = true;
  }

  //更新資料
  updateItem(oldItem: TodoItemInterface, inputValue: string) {
    console.log("updateItem", oldItem, inputValue);
    oldItem.name = inputValue;
    oldItem.isEdit = false;
  }
}
