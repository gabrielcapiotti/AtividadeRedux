import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';
import { AppRoutes } from './routes/AppRoutes';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppRoutes />
            </PersistGate>
        </Provider>
    );
}

export default App;
