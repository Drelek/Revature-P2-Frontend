import App from './App';
import React from 'react';
import { Provider} from 'react-redux';
import { createStore, Store } from 'redux';
import { reducers } from './redux/session_reducers';
import { IAppState } from './redux/store';
import { IAppActions } from './redux/actions';
import { registerRootComponent } from 'expo';

const store: Store<IAppState, IAppActions> = createStore(reducers);

const Entry:React.FC = () => {
  return (
    <Provider store={store}>
        <App/>
    </Provider>
  )
}
registerRootComponent(Entry)
export default Entry;