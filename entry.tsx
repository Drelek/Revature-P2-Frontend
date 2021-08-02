import App from './App';
import React from 'react';
import { Provider} from 'react-redux';
import { createStore, Store } from 'redux';
import { reducers } from './redux/session_reducers';
import { IAppState } from './redux/store';
import { IAppActions } from './redux/actions';
import { registerRootComponent } from 'expo';
import Toast, { BaseToast } from 'react-native-toast-message';

const store: Store<IAppState, IAppActions> = createStore(reducers);

const Entry:React.FC = () => {
  return (
    <Provider store={store}>
        <App/>
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  )
}
registerRootComponent(Entry)
export default Entry;
//