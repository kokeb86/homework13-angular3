import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from './db.service';
import { Router } from "@angular/router";

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
<button (click)="onNavigate()">Go Home</button>
    </div>
  `
})
export class studentDetail {
 private subscription: Subscription;
  private student;
  id: string;


  constructor(private router: Router,private activatedRoute: ActivatedRoute,private dataService: DataService) {
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
    this.student = this.dataService.getData().filter(student => student.id === this.id)[0];


  }

  onNavigate() {
      // Imperative Routing
      this.router.navigate(['/']);
    }

}
