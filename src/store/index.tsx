import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "store/reducers";
import rootSaga from "store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = ReturnType<typeof store.dispatch>;
export default store;
