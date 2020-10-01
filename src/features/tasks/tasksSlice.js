import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'taskTable',
    initialState: {
        taskTable: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addNewTask: ({ taskTable }, { payload }) => {
            taskTable.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.taskTable.findIndex(task => task.id === action.payload);
            state.taskTable[index].done = !state.taskTable[index].done;
        },
        removeTask: (state, action) => {
            const index = state.taskTable.findIndex(task => task.id === action.payload);
            state.taskTable.splice(index, 1);
        },
        setAllDone: state => {
            for (const task of state.taskTable) {
                task.done = true;
            };
        },
        fetchExampleTasks: () => { },
        setTasks: (state, {payload: taskTable}) => {
            state.taskTable = taskTable;
        },
    },
});
export const {
    addNewTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.taskTable;

export const selectTasks = state => selectTasksState(state).taskTable;
export const selectHideDone = state => selectTasksState(state).hideDone;
export default tasksSlice.reducer;
