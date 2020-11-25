import Component from '@ember/component';

export default Component.extend({
  // tagName: 'input',
  isFocused: false,
  focusIn() {
    console.log('focusIn');
    this.set('isFocused', true);
  },
  focusOut() {
    console.log('focusOut');
    this.set('isFocused', false);
  },
});
