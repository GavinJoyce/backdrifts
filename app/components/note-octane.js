import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked isFocused = false;
  @tracked isDisabled = false;

  @action
  onFocus() {
    console.log('onFocus');
    this.isFocused = true;
  }

  @action
  onBlur() {
    console.log('onBlur');
    this.isFocused = false;
  }

  @action
  onKeyDown(e) {
    switch (e.keyCode) {
      case 13: // Enter
        console.log('ENTER');
        e.preventDefault();
        this.isDisabled = true;
        break;
    }
  }
};