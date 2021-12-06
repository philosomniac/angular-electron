import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TestStep } from '../test-step';

@Component({
  selector: 'app-test-step',
  templateUrl: './test-step.component.html',
  styleUrls: ['./test-step.component.css'],
})
export class TestStepComponent implements OnInit {
  @Input() teststep?: TestStep;
  textContent = '';
  action: string = '';
  results: string[] = [];
  @Output() addStepEvent = new EventEmitter<TestStep>();

  constructor() {}

  ngOnInit(): void {
    // this.textContent = 'This content is bound to the typescript object';
    if (this.teststep) {
      this.action = this.teststep.action;
      this.results = this.teststep.results;
    }
  }

  addStep(): void {
    this.addStepEvent.emit({ action: 'new action', results: [] });
  }
}
