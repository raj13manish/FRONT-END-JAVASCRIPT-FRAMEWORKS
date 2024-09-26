import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassingGradePipe } from '../passing-grade.pipe';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, PassingGradePipe],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() students: any[] = [];
}