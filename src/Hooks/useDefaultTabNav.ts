import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface PropType {
  endsWith: string
  navTo: string
}

export const useDefaultTabNav = (props: PropType) => {
  const { endsWith, navTo } = props

  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.endsWith(endsWith)) {
      navigate(navTo)
    }
  }, [pathname, navigate, navTo, endsWith])

  return { pathname }
}