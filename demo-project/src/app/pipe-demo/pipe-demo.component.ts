import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,JsonPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {
  date=new Date();
  name="Manish"
  fees = 20000
  obj ={
    name:"Mahek",
    Course:'BCA',
    age:55,
    address:'GIRIDIH',
  }
}
