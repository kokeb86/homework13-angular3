import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from './db.service';

@Component({
  selector: 'app-route',
  template: `
   <!--
//display the student profile using angular expression {{}},local variables
-->
    <div>
    <P>Student Id: {{student.id}}<p>
      <P>Student First Name: {{student.name}}<p>
      <P>Student email: {{student.email}}<p>

    </div>
  `
})
export class studentDetail {
 private subscription: Subscription;
  private student;
  id: string;


  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService) {
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
    this.student = this.dataService.getData().filter(student => student.id === this.id)[0];


  }



}
