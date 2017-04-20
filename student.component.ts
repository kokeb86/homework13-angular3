import { Component } from '@angular/core';

import { DataService } from './db.service';
@Component({
  selector: 'app-comp1',
  template: `
    <div>
        
        <ul>
            <li *ngFor="let student of students"><a [routerLink] = "['profile', student.id]">{{student.name}}</a></li>
        </ul>
    </div>
  `
})
export class studentComponent {
    
   private students;

    constructor ( private dataService: DataService) {
         this.students = this.dataService.getData();
    }
    
   

    
      
    

}



    
