import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store/store';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   });
// }
