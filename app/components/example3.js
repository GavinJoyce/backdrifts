import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

class BrokenList {
  @tracked items = [];

  constructor(showFruit = false, showAnimals = false, showComputers = false) {
    if (showFruit) {
      // this will error as we're getting and setting the tracked property
      this.items = [...this.items, "Apple"]; 
    }

    if (showAnimals) {
      this.items = [...this.items, "Dog"]; 
    }

    if (showComputers) {
      this.items = [...this.items, "Mac"]; 
    }
  }
}

class WorkingList {
  @tracked items = [];

  constructor(showFruit = false, showAnimals = false, showComputers = false) {
    let items = [];
    if (showFruit) {
      items = [...items, "Apple"]; 
    }

    if (showAnimals) {
      items = [...items, "Dog"]; 
    }

    if (showComputers) {
      items = [...items, "Mac"]; 
    }

    // this works as we're not getting and setting, just setting
    this.items = items;
  }
}

export default class Example3 extends Component {
  // @tracked list = new BrokenList(true, true, true);
  @tracked list = new WorkingList(true, true, true);
}
