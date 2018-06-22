import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() fname;
  @Input() sname;
  @Input() surname;
  @Input() age;
  @Input() birthdate;
  @Input() id;
  @Input() email;
  @Input() contactno;
  @Input() bookingdate;

  @Input() page;
  @Input() name;

  constructor(private router:Router) { }

  ngOnInit() {
    

  }
  navigator(){
    if(this.name ==='About'){
      this.router.navigate(['bookingform/contact']);
    }
    else if(this.name === 'contact'){
      this.router.navigate(['bookingform/contact'],{queryParams:{name: this.fname,sname: this.sname,surname: this.surname,age: this.age,
                                            birthdate: this.birthdate,id: this.id,email: this.email,contactno: this.contactno,bookingdate: this.bookingdate}});
    }
}}