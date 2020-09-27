import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import tasksReducer from './features/tasks/tasksSlice';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        taskTable: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

store.subscribe(() => {
    localStorage.setItem("taskTable", JSON.stringify(store.getState().taskTable.taskTable));
});

sagaMiddleware.run(rootSaga);

export default store;