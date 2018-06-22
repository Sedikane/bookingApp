import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  fname;
  sname;
  surname;
  age;
  birthdate;
  id;
  email;
  contactno;
  bookingdate;

  constructor(private route: ActivatedRoute,private approute: Router) { }

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
      this.bookingdate=params['bookingdate'];

    console.log(this.fname);
    console.log(this.sname);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.birthdate);
    console.log(this.id);
    console.log(this.email);
    console.log(this.contactno);
    console.log(this.bookingdate);
    })
}
booking(){
  alert("Your booking has been approved:"+this.fname)
  this.approute.navigate(['/approve'])
}  
}