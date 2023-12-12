import { Transition } from "@mantine/core"
import { Carousel } from "@mantine/carousel"

import { SLIDE_COMPONENTS } from "../constants.ts"

export const SlideComponents = ({
  currentSlide,
  instanceApi,
}: ISlideComponent) => {
  return SLIDE_COMPONENTS.map((Form, index) => (
    <Carousel.Slide key={Form.key} pb="xl">
      <Transition
        keepMounted
        mounted={instanceApi !== null && currentSlide === index}
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

interface ISlideComponent {
  currentSlide: number
  instanceApi: any
}
