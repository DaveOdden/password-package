import { Flex, Title, Text } from "@mantine/core"
import { Nav } from "./Nav.tsx"

export const Header = ({ instanceApi }: ISlideComponent) => {
  return (
    <Flex align="center" direction="column" mb="xl">
      <Title order={1} mt="xl" mb="sm">
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
