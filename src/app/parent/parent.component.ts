import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild('para') para!: ElementRef;
  showParaValue(){
    console.log(this.para.nativeElement);
  }
}
