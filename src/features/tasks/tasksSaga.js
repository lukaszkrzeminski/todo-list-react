import { call, takeLatest, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError, selectTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try{
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    }catch(error){
        yield put(fetchExampleTasksError());
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