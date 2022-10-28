import { message } from "antd"
import { useLocation, Navigate, useNavigate } from "react-router-dom"
import { type RouterType, routers } from './index'
export default function RouterBefore({ children }: any) {
  const location = useLocation()
  const lastItem = location.pathname.split("/")
  const navigate = useNavigate()

  const a = false //鉴权条件
  //单个组件鉴权
  function ComponentAuthentication(obj: RouterType[]) {
    for (const k in obj) {
      if (lastItem.at(-1) === obj[k].path && obj[k].pover) {
        //需要鉴权
        if (a) {//鉴权成功
          return
        } else {//鉴权失败
          navigate('/nopermission')
          return
        }
      }
      obj[k].children && ComponentAuthentication(obj[k].children!)
    }
  }
  ComponentAuthentication(routers)

  const token = true

  //登录鉴权
  if (token) {
    return <>{children}</>
  } else {
    message.warning('您没有权限,请登录！')
    return <Navigate to={"/login"} replace />
  }
}


