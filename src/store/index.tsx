import { legacy_createStore as createStore, applyMiddleware } from "redux"

// 异步支持 redux-thunk
import thunk from "redux-thunk"

import allReducers from "./reducers"

const store = createStore(allReducers, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export default store
