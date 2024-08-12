import { createStore, combineReducers } from "redux";
import counterReducer from "../features/counter/model/counterReducer";

const rootReduser = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReduser)