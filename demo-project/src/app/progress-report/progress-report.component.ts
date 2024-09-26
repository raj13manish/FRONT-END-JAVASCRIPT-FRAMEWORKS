import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MarkstopercentagePipe } from '../markstopercentage.pipe';


@Component({
  selector: 'app-progress-report',
  standalone: true,
  imports: [NgFor,MarkstopercentagePipe],
  templateUrl: './progress-report.component.html',
  styleUrl: './progress-report.component.css'
})
export class ProgressReportComponent {
  StudentMarks = [
    { name: 'John Doe', marks: 85, rollNumber: 1 },
    { name: 'Jane Smith', marks: 92, rollNumber: 2 },
    { name: 'Sam Brown', marks: 78, rollNumber: 3 },
    { name: 'Lisa White', marks: 88, rollNumber: 4 }
  ];
}