import { Flex, Title, Text } from "@mantine/core"
import { Nav } from "./Nav.tsx"

export const Header = ({ instanceApi }: ISlideComponent) => {
  return (
    <Flex align="center" direction="column" mb="lg">
      <Title order={1} mt="xl" mb="sm" ta="center">
        Form Validation Schema Test Harness
      </Title>
      <Text c="dimmed" ta="center" mb="xl">
        A single zod validation schema adapted to the following form libraries
      </Text>
      <Nav carouselApi={instanceApi} />
    </Flex>
  )
}

interface ISlideComponent {
  instanceApi: any
}
