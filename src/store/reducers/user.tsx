import { USER_INFO, USER_ORGID, SELECT_ORGID } from "../constant"

export interface userType {
  user_info: IUserInfo
  org_id: number[] //用户食堂
  cur_id: number //用户当前选择的食堂索引
}

export interface IUserInfo {
  address?: string
  email?: string
  id?: string
  id_card?: string
  name?: string
  phone?: string
  sex?: number
}

const initState: userType = {
  user_info: window.localStorage.getItem("user_info")
    ? JSON.parse(window.localStorage.getItem("user_info")!)
    : null,
  org_id: window.localStorage.getItem("org_id")
    ? JSON.parse(window.localStorage.getItem("org_id")!)
    : [],
  cur_id: window.localStorage.getItem("cur_id")
    ? JSON.parse(window.localStorage.getItem("cur_id")!)
    : window.localStorage.getItem("org_id")
    ? JSON.parse(window.localStorage.getItem("org_id")!)[0].id
    : null
}

export default function userReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case USER_INFO:
      newState = { ...preState, user_info: data.user_info }
      break
    case USER_ORGID:
      newState = { ...preState, org_id: data.org_id }
      break
    case SELECT_ORGID:
      newState = { ...preState, cur_id: data.cur_id }
      break
    default:
      newState = preState
      break
  }
  return newState
}
