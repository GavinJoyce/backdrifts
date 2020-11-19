import Model, { attr } from '@ember-data/model';
import { fragment, fragmentArray } from 'ember-data-model-fragments/attributes';

export default class PersonModel extends Model {
  @attr('string') location;
  @fragment('name') name;
  @fragmentArray('address') addresses;
}
