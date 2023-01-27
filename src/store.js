import {legacy_createStore} from "redux"

import RootReducer from "./reducers/index"

const store = legacy_createStore(RootReducer);

export default store;