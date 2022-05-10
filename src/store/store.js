import { createStore as createReduxStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const createStore = async () => {
    const sagaMiddleware = createSagaMiddleware({
        onError(err) {
            console.log(err);
        },
    });

    const store = createReduxStore(rootReducer, applyMiddleware(sagaMiddleware));

    await sagaMiddleware.run(rootSaga);

    return { store };
};
