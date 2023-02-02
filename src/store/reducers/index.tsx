import { combineReducers } from "redux"

import login from "./login"
import user from "./user"
import seleWeek from "./seleWeek"

export default combineReducers({
  login,
  user,
  seleWeek
})
