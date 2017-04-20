import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <div [ngClass]="{myColor:true, myBorder:false}">
    <p>
Wellcome to Maharishi University Of Management Home Page!,The Home far from your Home!
</p>
    </div>
  `,
  styles:  [`.myBorder { border: 2px solid red; }`,
           `.mycolor  { color: green; }`]
})
export class HomeComponent  {

  constructor() { }


}
