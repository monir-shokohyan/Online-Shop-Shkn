import {createStore} from "redux"
import combineReducer from "../CombineReducer/CombineReducer"
const store=createStore(combineReducer)

export default store