import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

export default class Example2 extends Component {
  @tracked count = 0;

  constructor() {
    super(...arguments);
    this.loadData.perform();
  }

  @task
  *loadData() {
    this.count++; // this fails in 3.22.1, but works 3.21
    yield timeout(300);
    this.count++;
    return {};
  }
}
