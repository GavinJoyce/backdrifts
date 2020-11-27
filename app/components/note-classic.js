import Component from '@ember/component';

export default Component.extend({
  isFocused: false,
  isDisabled: false,

  focusIn() {
    console.log('focusIn');
    this.set('isFocused', true);
  },
  focusOut() {
    console.log('focusOut');
    this.set('isFocused', false);
  },

  keyDown(e) {
    switch (e.keyCode) {
      case 13: // Enter
        console.log('ENTER');
        e.preventDefault();
        this.set('isDisabled', true); //this will cause a `focusOut` which will result in a backtracking error
        break;
    }
  },
});