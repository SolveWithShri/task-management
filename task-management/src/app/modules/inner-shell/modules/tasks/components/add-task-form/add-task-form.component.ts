import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { UserService } from './../../../../../../core/services/user.service';
import { User } from './../../../../../../core/dtos/user.dto';
import { Task } from './../../../../../../core/dtos/task.dto';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {

  @Output()
  addTask: EventEmitter<Task> = new EventEmitter();

  addTaskForm: FormGroup;
  users: User[];

  constructor(private formBuilder: FormBuilder, private userService: UserService) {

    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });

    this.addTaskForm = this.formBuilder.group({
      text: new FormControl('', Validators.required),
      isGlobal: new FormControl(false),
      isLeader: new FormControl(false),
      creator: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
    });
  }

  submitTaskForm() {

    const addTaskBody: Task = {
      ...this.addTaskForm.value,
      creator: this.addTaskForm.value['creator']['name'],
      isCompleted: false
    };

    this.addTask.emit(addTaskBody);
  }
}
