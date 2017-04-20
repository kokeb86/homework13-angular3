import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <div [ngClass]="{myColor:true, myBorder:false}">
Wellcome to Maharishi University Of Management Home Page!,The home far from your Home!

    </div>
  `,
  styles:  [`.myBorder { border: 2px solid red; }`,
           `.mycolor  { color: green; }`]
})
export class HomeComponent  {

  constructor() { }


}
