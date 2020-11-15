import { call, takeLatest, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks, loadExampleTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try{
        yield put(loadExampleTasks(true));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(loadExampleTasks(false));
    }catch(error){
        yield call(alert, "Coś poszło nie tak");
    }
};

function* saveTasksInLocalStorageHandler() {
    const taskTable = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, taskTable);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};