import { Component, Input } from '@angular/core';
import { Actor } from '../_models/actor.model';

@Component({
  selector: 'app-movie',
  template: `
  <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} {{actor.lastName}}</span>
      </p>
    </div>`
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Actor;
}
