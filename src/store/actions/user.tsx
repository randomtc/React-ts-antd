import { USER_INFO, USER_ORGID, SELECT_ORGID } from "../constant"

export const changeUserInfoAction = (payload: any) => {
  return { type: USER_INFO, data: payload }
}
export const changeUserOrgIdAction = (payload: any) => {
  return { type: USER_ORGID, data: payload }
}
export const changeSelectOrgIdAction = (payload: any) => {
  return { type: SELECT_ORGID, data: payload }
}
