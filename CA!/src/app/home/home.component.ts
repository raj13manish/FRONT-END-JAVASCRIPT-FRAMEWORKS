import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isActive: boolean = false;
  userName: string = '';


  toggleActive() {
    this.isActive = !this.isActive;
  }
    message: string = "Hello, World!";
  
    onClick() {
      this.message = "Button Clicked!";
    }
    isVisible: boolean = true;
  items: string[] = ['Ronit', 'Raju', 'Rajesh','ranjan'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
