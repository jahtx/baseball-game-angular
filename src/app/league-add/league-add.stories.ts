import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { LeagueAddComponent } from './league-add.component';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';
import markdown from './docu.md';
export default {
  title: 'League Add',
  parameters: {
    notes: { markdown }
  }
};

export const FailSafe = () => ({
  template: `<app-league-add></app-league-add>`,
  props: {
    text: 'doggie',
    leagueForm: FormGroup
  }
});
export const FailSafe25 = () => ({
  template: `<p>FailSafe 2 😀 😎 👍 💯</p>`,
  props: {
    leagueForm: FormGroup
  }
});

// this use to be done with the storiesOf API
