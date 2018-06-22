import { Component, OnInit,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  @Input() fname;
  @Input() sname;
  @Input() surname;
  @Input() age;
  @Input() birthdate;
  @Input() id;
  @Input() email;
  @Input() contactno;
  @Input() bookingdate;
  
  constructor(private route: ActivatedRoute) { }

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
    });
  }

}
