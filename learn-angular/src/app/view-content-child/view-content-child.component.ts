import { Component, OnInit, ContentChild, ContentChildren, QueryList, ChangeDetectorRef, AfterViewInit, AfterContentInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-content-child',
  templateUrl: './view-content-child.component.html',
  styleUrls: ['./view-content-child.component.scss']
})
export class ViewContentChildComponent implements OnInit,  AfterViewInit,  AfterContentInit {
@ContentChild(ChildComponent, {static: false}) child: ChildComponent;
@ContentChildren(ChildComponent) children: QueryList<ChildComponent>;
@ViewChild(ChildComponent, {static: true}) childV: ChildComponent;
@ViewChildren(ChildComponent) childrenV: QueryList<ChildComponent>;
@ViewChild('h1', {static: false}) h1: ElementRef<HTMLHeadElement>;
  constructor(
    private cd: ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {
    console.log('content child viewInit', this.child);
    console.log('content children viewInit', this.children);


    // gives error of 'value has been changeed after it was checked'
    this.children.forEach(child => {
      console.log('one child viewInit:', child);
      // child.childName = 'good boy';
    });

    console.log('viewchild viewInit', this.childV);
    this.childV.childName='2os2os';
    console.log('viewchildren viewInit', this.childrenV);
    this.cd.detectChanges();
  }
  ngAfterContentInit(): void {
    console.log('content child contentInit', this.child);
    console.log('content children contentInit', this.children);

    // this.children.forEach(child=>{
    //   console.log('one child content:', child);
    // });

    // it is fine to change value of content children within AftercontentInit
    // this.children.forEach(child => {
    //   console.log('one child contentInit:', child);
    //   child.childName = 'good boy';
    //   // this.cd.detectChanges();
    // });
  }
  ngOnInit() {
  }

}
