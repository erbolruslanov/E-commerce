import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {catalogReducer} from "./reducer/shopReducer";


export const store = createStore(catalogReducer, composeWithDevTools())