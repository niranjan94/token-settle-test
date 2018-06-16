import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  session: service(),

  actions: {
    authenticate() {
      const credentials = this.getProperties('username', 'password');
      this.set('isLoading', true);
      this.get('session')
        .authenticate('authenticator:jwt', credentials)
        .then(() => {
          console.log('Authentication success.')
        })
        .catch(e => {
          console.error('Authentication failed', e)
        })
        .finally(() => this.set('isLoading', false));
    }
  }
});
