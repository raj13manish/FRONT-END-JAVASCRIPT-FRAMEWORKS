import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  students = [
    { id: 1, name: 'Raj', grade: 75 },
    { id: 2, name: 'Akash ', grade: 58 },
    { id: 3, name: 'Raju', grade: 89 },
    { id: 4, name: 'sumit', grade: 40 },
    { id: 5, name: 'tiwari', grade: 50 }
  ];
}