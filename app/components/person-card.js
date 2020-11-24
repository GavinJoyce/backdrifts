import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PersonCardComponent extends Component {
  @service store;

  constructor() {
    super(...arguments);

    let name = this.store.createFragment('name', { first: 'Alex', last: 'Joyce'});
    this.args.person.name = name; // this works

    let address = this.store.createFragment('address', { street: 'Main St.'});
    /* The following fails with: You attempted to update `[]` on `<backdrifs@model:address::ember202:owner(null)>`, but it had already been used previously in the same computation.  Attempting to update a value after using it in a computation can cause logical errors, infinite revalidation bugs, and performance issues, and is not supported. */
    this.args.person.addresses.addFragment(address);
  }
}
