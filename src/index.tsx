import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store/index';
import App from 'components/App/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);