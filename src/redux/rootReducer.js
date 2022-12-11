import {combineReducers} from "redux";
import {likesReducer} from "./likesRedicer";
import {inputReducer} from "./inputReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer
});