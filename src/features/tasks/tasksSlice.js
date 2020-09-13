import { createSlice } from '@reduxjs/toolkit';
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskTable: JSON.parse(localStorage.getItem("taskTable")),
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
            for( const task of state.taskTable){
                task.done = true;
            };
        },
    },
});
export const { addNewTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.taskTable;
export default tasksSlice.reducer;
