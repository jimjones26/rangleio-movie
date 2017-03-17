import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Actor } from '../_models/actor.model';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-movie',
  template: `
  <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{ actor.get('firstName') }} {{ actor.get('lastName') }}</span>
      </p>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Immutable.Map<string, string>;
}
