// src/app/components/task.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="list-item">
      <input type="text" [value]="task.title" readonly="true" />
    </div>
  `
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
