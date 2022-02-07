import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[];

  constructor(){
    this.goals = ['Watch finding Nemo', 'Buy Cookies', 'Get new phone case']
  }
  title = 'My Goals';
  goal = 'Watch Finding Nemo'
}
