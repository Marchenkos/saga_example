import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { useStore } from './store/useStore';

export const Main = React.memo(function Main() {
    const store = useStore();

    if (!store) {
      return null;
    }
  return (
    <Provider store={store.store}>
      <div>Example</div>
    </Provider>
  );
});

ReactDOM.render(<Main />, document.getElementById('output'));
