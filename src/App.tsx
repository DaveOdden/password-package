import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "@mantine/core"
import { Carousel, Embla } from "@mantine/carousel"

import { Header } from "./components/Header.tsx"
import { SlideComponents } from "./components/SlideComponents.tsx"

export const App: React.FC = () => {
  const location = useLocation()
  const slideIndex = location.pathname.slice(1, location.pathname.length)
  const initialSlideIndex =
    location.pathname.length > 1 ? parseInt(slideIndex) : 0
  const [slide, setSlide] = useState<number>(initialSlideIndex)
  const [embla, setEmbla] = useState<Embla | null>(null)

  useEffect((): void => embla?.scrollTo(initialSlideIndex), [embla])

  return (
    <Container fluid>
      <Header carouselApi={embla} />
      <Carousel
        draggable={false}
        withControls={false}
        onSlideChange={setSlide}
        getEmblaApi={(e) => setEmbla(e)}
        slideSize={440}
      >
        <SlideComponents currentSlide={slide} carouselApi={embla} />
      </Carousel>
    </Container>
  )
}
