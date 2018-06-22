import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fname;
  sname;
  surname;
  age;
  birthdate;
  id;
  email;
  contactno;
  bookingdate;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.fname=params['fname'];
      this.sname=params['sname'];
      this.surname=params['surname'];
      this.age=params['age'];
      this.birthdate=params['birthdate'];
      this.id=params['id'];
      this.email=params['email'];
      this.contactno=params['contactno'];
      this.bookingdate=params['bookingdate'];})

  console.log(this.fname);
  console.log(this.sname);
  console.log(this.surname);
  console.log(this.age);
  console.log(this.birthdate);
  console.log(this.id);
  console.log(this.email);
  console.log(this.contactno);
  console.log(this.bookingdate);
  }

}
