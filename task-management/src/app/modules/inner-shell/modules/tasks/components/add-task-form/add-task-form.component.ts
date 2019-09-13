import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

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

  readonly addTaskFormKeys = {
    text: 'text',
    isLeader: 'isLeader',
    creator: 'creator',
    start: 'start',
    end: 'end'
  };
  readonly dateFormatForPrimeNgCalender = 'yy-mm-dd';
  readonly minDateValue = new Date();

  addTaskForm: FormGroup;
  users: User[];

  private readonly dateFormatAngularDatePipe = 'yyyy-MM-dd';

  get textFormControl(): FormControl {
    return this.addTaskForm.controls[this.addTaskFormKeys.text] as FormControl;
  }

  get creatorFormControl(): FormControl {
    return this.addTaskForm.controls[this.addTaskFormKeys.creator] as FormControl;
  }

  get startFormControl(): FormControl {
    return this.addTaskForm.controls[this.addTaskFormKeys.start] as FormControl;
  }

  get endFormControl(): FormControl {
    return this.addTaskForm.controls[this.addTaskFormKeys.end] as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private userService: UserService) {

    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });

    this.addTaskForm = this.formBuilder.group({
      [this.addTaskFormKeys.text]: new FormControl('', Validators.required),
      [this.addTaskFormKeys.isLeader]: new FormControl(false),
      [this.addTaskFormKeys.creator]: new FormControl('', Validators.required),
      [this.addTaskFormKeys.start]: new FormControl('', Validators.required),
      [this.addTaskFormKeys.end]: new FormControl('', Validators.required)
    });
  }

  submitTaskForm() {

    if (this.addTaskForm.invalid) {
      this.markFormGroupTouched(this.addTaskForm);
      return;
    }

    const addTaskBody: Task = {
      ...this.addTaskForm.value,
      creator: this.creatorFormControl.value['name'],
      isCompleted: false,
      isGlobal: false,
      start: this.datePipe.transform(this.startFormControl.value, this.dateFormatAngularDatePipe),
      end: this.datePipe.transform(this.endFormControl.value, this.dateFormatAngularDatePipe)
    };

    this.addTask.emit(addTaskBody);
    this.addTaskForm.disable();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
