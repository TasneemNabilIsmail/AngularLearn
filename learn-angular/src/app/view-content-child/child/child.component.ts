import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childName: string;
  @Output() selectedChild: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.selectedChild.emit('this ' + this.childName + ' is beautiful');
  }

}
