import { module, test } from 'qunit';
import { visit, currentURL, fillIn, triggerKeyEvent, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | homepage', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    await fillIn('input', 'Test note 1');
    await triggerKeyEvent('input', 'keydown', 13);

    assert.equal(currentURL(), '/');


    assert.dom('span').isVisible();
  });
});
