import {createStore} from "redux";
import {imageProcessorReducer} from "./reducer";


export const store = createStore(imageProcessorReducer);

