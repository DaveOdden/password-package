import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { SegmentedControl, em } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Embla } from "@mantine/carousel"

import { SLIDE_COMPONENTS } from "../constants"

export const Nav: React.FC<{ carouselApi: Embla | null }> = ({
  carouselApi,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const initialIndex =
    location.pathname.slice(1, location.pathname.length) || "0"
  const [active, setActive] = useState<string>(initialIndex)
  const isMobile = useMediaQuery(`(max-width: ${em(550)})`)

  const navigateToRoute = (key: string): void => {
    setActive(key)
    navigate(key)
    carouselApi?.scrollTo(parseInt(key))
  }

  return (
    <SegmentedControl
      value={active}
      onChange={navigateToRoute}
      data={SLIDE_COMPONENTS}
      orientation={isMobile ? "vertical" : "horizontal"}
      size={isMobile ? "lg" : "sm"}
    />
  )
}
