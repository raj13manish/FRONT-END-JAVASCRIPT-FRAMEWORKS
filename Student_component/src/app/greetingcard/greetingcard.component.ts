import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greetingcard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './greetingcard.component.html',
  styleUrl: './greetingcard.component.css',
})
export class GreetingcardComponent {
  occassion: string = '';
  sendername: string = '';
  receivername: string = '';
}