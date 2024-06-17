import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@ContentChild('para') paragraphEl!: ElementRef;
@ContentChild(TestComponent) test!: TestComponent;
@ContentChildren('para') paragraphAll!: QueryList<ElementRef>;
@ContentChildren(TestComponent) names!: QueryList<TestComponent>;
StyleParagraph(){
  // console.log(this.paragraphEl.nativeElement);
  // console.log(this.test.name);
  // this.paragraphAll.forEach((el) => {
  //   console.log(el.nativeElement);
  // });
  this.names.forEach((el) => {
    console.log(el.name);
  });
}
}
