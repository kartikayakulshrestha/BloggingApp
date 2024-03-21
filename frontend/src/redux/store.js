import reducerLikes from "./reducers/index";
import { thunk } from "thunk";
import {createStore , applyMiddleware} from "redux"

const likestore=createStore(reducerLikes,applyMiddleware(thunk))
export default likestore