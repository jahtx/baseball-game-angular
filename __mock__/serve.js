import mockyeah from 'mockyeah';
import { endpoints } from './index';

/**
 * Loop over the endpoints configuration to create the mock endpoints.
 */
Object.entries(endpoints).forEach(([key, value]) => {
  const { method } = value;
  /* Properties on the `value` object will be passed along to MockYeah. It will error
   * if it contains properties which are not supported so we delete them before passing along.
   */
  /* eslint-disable no-param-reassign */
  delete value.method;
  delete value.live;
  /* eslint-enable no-param-reassign */
  mockyeah[method.toLowerCase()](key, value);
});
