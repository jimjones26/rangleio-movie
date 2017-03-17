import { Component } from '@angular/core';
import { Actor } from './_models/actor.model';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-root',
  template: `
    <h1>MovieApp</h1>
    <p>{{ slogan }}</p>
    <button type="button" (click)="changeActor()">
      Change Actor
    </button>
    <app-movie [title]="title" [actor]="actor"></app-movie>`
})
export class AppComponent {
  slogan = 'Just movie information';
  title = 'Terminator 1';
  // actor = new Actor('Arnold', 'Schwarzenegger');
  actor = Immutable.Map({
    firstName: 'Arnold',
    lastName: 'Schwarzenegger'
  });

  changeActor() {
    this.actor = this.actor.merge({ firstName: 'Nicholas', lastName: 'Cage' });
  }
}
