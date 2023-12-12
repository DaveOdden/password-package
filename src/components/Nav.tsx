import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { SegmentedControl } from "@mantine/core"

import { SLIDE_COMPONENTS } from "../constants"

export const Nav = (props: any) => {
  const { carouselApi } = props
  const navigate = useNavigate()
  const location = useLocation()
  const initialIndex =
    location.pathname.slice(1, location.pathname.length) || "0"
  const [active, setActive] = useState(initialIndex)

  const navigateToRoute = (key: string) => {
    setActive(key)
    navigate(key)
    carouselApi.scrollTo(parseInt(key))
  }

  return (
    <SegmentedControl
      value={active}
      onChange={navigateToRoute}
      data={SLIDE_COMPONENTS}
    />
  )
}
