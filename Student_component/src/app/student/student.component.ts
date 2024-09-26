import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  @Input()  myInputMsg:string=''
  constructor() { }
  ngOnInit(): void {
    console.log(this. myInputMsg);

}
}
