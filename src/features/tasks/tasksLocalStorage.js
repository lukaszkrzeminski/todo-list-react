const localStorageKey = "taskTable";

export const saveTasksInLocalStorage = taskTable => 
    localStorage.setItem(localStorageKey, JSON.stringify(taskTable));
    console.log("saved to local storage");

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKey)) || [];
    console.log("loaded from local storage");