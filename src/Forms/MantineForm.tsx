import { z } from "zod"
import {
  Center,
  Paper,
  Stack,
  Button,
  PasswordInput,
  Title,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { zodResolver } from "mantine-form-zod-resolver"
import { customZodSchema } from "zod-password-validation-schema"

export const MantineForm = () => {
  const [visible, { toggle }] = useDisclosure(false)

  const form = useForm<z.infer<typeof customZodSchema>>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(customZodSchema),
  })

  const submitForm = (values: IPasswordFormFields) => {
    console.log("Mantine Form - Submit")
    console.log(values)
  }

  return (
    <Center>
      <Paper w={350} withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(submitForm)}>
          <Stack>
            <Title order={2}>Mantine Form</Title>
            <PasswordInput
              label="Password"
              visible={visible}
              onVisibilityChange={toggle}
              visibilityToggleButtonProps={{
                "aria-label": "Toggle password visibility",
              }}
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm password"
              visible={visible}
              onVisibilityChange={toggle}
              visibilityToggleButtonProps={{
                "aria-label": "Toggle password visibility",
              }}
              {...form.getInputProps("confirmPassword")}
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Paper>
    </Center>
  )
}

interface IPasswordFormFields {
  password: string
  confirmPassword: string
}
