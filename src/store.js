import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasksSlice';

const store = configureStore({
    reducer: {
        taskTable: tasksReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem("taskTable", JSON.stringify(store.getState().taskTable.taskTable));
});

export default store;