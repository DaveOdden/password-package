import { Transition } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import { Embla } from "@mantine/carousel"

import { SLIDE_COMPONENTS } from "../constants.ts"

export const SlideComponents: React.FC<{
  currentSlide: number
  carouselApi: Embla | null
}> = ({ currentSlide, carouselApi }) => {
  return SLIDE_COMPONENTS.map((Form, index) => (
    <Carousel.Slide key={Form.key} pb="xl">
      <Transition
        keepMounted
        mounted={carouselApi !== null && currentSlide === index}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={styles}>
            <Form.Component />
          </div>
        )}
      </Transition>
    </Carousel.Slide>
  ))
}
