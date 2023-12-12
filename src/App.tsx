import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "@mantine/core"
import { Carousel, Embla } from "@mantine/carousel"

import { Header } from "./components/Header.tsx"
import { SlideComponents } from "./components/SlideComponents.tsx"

export const App = () => {
  const location = useLocation()
  const slideIndex = location.pathname.slice(1, location.pathname.length)
  const initialSlideIndex =
    location.pathname.length > 1 ? parseInt(slideIndex) : 0
  const [slide, setSlide] = useState(initialSlideIndex)
  const [embla, setEmbla] = useState<Embla | null>(null)

  useEffect(() => embla?.scrollTo(initialSlideIndex), [embla])

  return (
    <Container fluid>
      <Header instanceApi={embla} />
      <Carousel
        draggable={false}
        withControls={false}
        onSlideChange={setSlide}
        getEmblaApi={(e) => setEmbla(e)}
      >
        <SlideComponents currentSlide={slide} instanceApi={embla} />
      </Carousel>
    </Container>
  )
}
