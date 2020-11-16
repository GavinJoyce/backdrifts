import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Example1 extends Component {
  @tracked count = 0;

  constructor() {
    super(...arguments);

    // this fails in 3.22.1, but works 3.21
    this.count++;
  }
}
