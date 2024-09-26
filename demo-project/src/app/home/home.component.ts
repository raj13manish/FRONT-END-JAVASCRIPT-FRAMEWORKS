import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor,NgClass } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { FeedbackComponent } from '../feedback/feedback.component';
// stepes to create pipe  
// import pipe in ts then u can use in html withe the name of pipe 
// create a coutme pipe which wil filter array of object by passing value as argumnet in the pipe 
// 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, NgFor,NgClass, ContactComponent,FeedbackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  students:any []=[
    {
      name: "Harsh Kumar",
      course: "BCA",
      reg_no: "1221087",
      email:"assaasaae@gmail.com",
      fees_paid:true
    },
    {
      name: "Akash Kumar",
      course: "BCA",
      reg_no: "1285157",
      email:"manish@gmail.com",
      fees_paid:true
    },
    {
      name: "Manish Kumar",
      course: "BCA",
      reg_no: "1234828",
      email:"Gmakumar@gmail.com",
      fees_paid:true
    },
    {
      name: "aditya jlan",
      course: "BCA",
      reg_no: "18595255",
      email:"aytbshb@gmail.com",
      fees_paid:false
    },
    


    
  ]
  

}
