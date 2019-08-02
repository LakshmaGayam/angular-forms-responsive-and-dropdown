import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  topic=[
    "java","html","angular","jquery","css","sql/database","oracle/database"

    
  ];
  getData()
  {
    console.log();
  }
}
