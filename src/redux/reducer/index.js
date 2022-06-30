import { combineReducers } from "redux";
import { counterReducer} from"./Counter.Reducer"

export const rootReducer = combineReducers({
    Counter : counterReducer,
})