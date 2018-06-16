import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, getSettledState } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | failure case', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /dashboard with login redirect', async function(assert) {
    await visit('/dashboard');
    assert.equal(currentURL(), '/login');
    await fillIn('input[name=username]', 'some-username');
    await fillIn('input[name=password]', 'some-password');
    console.log('getSettledState:beforeSubmit', getSettledState());
    setTimeout(() => console.log('getSettledState:afterLogin', getSettledState()), 5000);
    await click('button[type=submit]'); // Execution will get stuck here. As the app is still in a un-settled state
    assert.equal(currentURL(), '/dashboard');
  });
});
