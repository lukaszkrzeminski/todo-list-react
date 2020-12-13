import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'taskTable',
    initialState: {
        taskTable: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
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
        fetchExampleTasks: state => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, {payload: taskTable}) => {
            state.taskTable = taskTable;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
        setTasks: (state, { payload: taskTable }) => {
            state.taskTable = taskTable;
        },
        loadExampleTasks: (state, action) => {
            state.loading = action.payload;
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
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    setTasks,
    loadExampleTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.taskTable;

export const selectTasks = state => selectTasksState(state).taskTable;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectExampleTasks = state => selectTasksState(state).loading;
export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
    if (!query || query === "") {
        return selectTasksState(state).taskTable;
    }
    return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};
export default tasksSlice.reducer;
