const localStorageKey = "taskTable";

export const saveTasksInLocalStorage = taskTable => 
    localStorage.setItem(localStorageKey, JSON.stringify(taskTable));

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKey)) || [];