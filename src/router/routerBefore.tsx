import { useLocation, Navigate } from "react-router-dom"

export default function RouterBefore({ children }: any) {
  const location = useLocation()

  const lastItem = location.pathname.split("/").pop()

  if (!isNaN(Number(lastItem))) {
    return <>{children}</>
  }
  const token = true


  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={"/login"} replace />
  }
}
