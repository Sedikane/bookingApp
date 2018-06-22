import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.css']
})
export class WelcomeHomeComponent implements OnInit {
  fname;
  sname;
  surname;
  age;
  birthdate;
  id;
  email;
  contactno;
  bookingdate;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  booking(){
    console.log(this.fname);
      console.log(this.sname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.birthdate);
      console.log(this.id);
      console.log(this.email);
      console.log(this.contactno);
      console.log(this.bookingdate);
      this.router.navigate(['bookingform']), {fname: this.fname,sname: this.sname, surname:this. surname,age: this.age , birthdate: this.birthdate,id: this.id, email: this.email,contactno: this.contactno,bookingdate: this.bookingdate}
}}
