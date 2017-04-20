import { Component } from '@angular/core';

import { DataService } from './db.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-comp1',
  template: `
    <div>

        <ul>
            <li *ngFor="let student of students"><a [routerLink] = "['profile', student.id]">{{student.name}}</a></li>
        </ul>
        <button (click)="onNavigate()">Go Home</button>
    </div>
`
})
export class studentComponent {

   private students;

    constructor ( private router: Router,private dataService: DataService) {
         this.students = this.dataService.getData();
    }



    onNavigate() {
      // Imperative Routing
      this.router.navigate(['/']);
    }
}
