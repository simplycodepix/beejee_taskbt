import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import { rootSaga } from './sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (initialState) => {
    const sagaMiddleware = createSagaMiddleware();

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['session']
    }

    const persistedReducer = persistReducer(persistConfig, reducers);

    let store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(createLogger(), sagaMiddleware)
    );

    let persistor = persistStore(store);

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return { store, persistor };
}