import { TOKEN_CHANGE, MENULIST } from "../constant"

export interface loginType {
  token: string | null
  menuList: menuItemType[]
}
export interface menuItemType {
  label: string
  key: string
  icon: string
  path?: string
  children?: menuItemType[]
}

const initState: loginType = {
  token: window.localStorage.getItem("access_token")
    ? window.localStorage.getItem("access_token")
    : null,
  menuList: window.localStorage.getItem("menu_list")
    ? JSON.parse(window.localStorage.getItem("menu_list")!)
    : []
}

export default function loginReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case TOKEN_CHANGE:
      newState = { ...preState, token: data.token }
      break
    case MENULIST:
      newState = { ...preState, menuList: data.menuList }
      break
    default:
      newState = preState
      break
  }
  return newState
}
