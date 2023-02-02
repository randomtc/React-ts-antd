import { TOKEN_CHANGE, MENULIST } from "../constant"
import { menuItemType } from "../reducers/login"
export const changeTokenAction = (payload: { token: string }) => {
  return { type: TOKEN_CHANGE, data: payload }
}
export const changeMenuList = (payload: { menuList: menuItemType[] }) => {
  return { type: MENULIST, data: payload }
}
