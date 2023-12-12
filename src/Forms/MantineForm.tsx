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
import { notifications } from "@mantine/notifications"

export const MantineForm: React.FC<{}> = () => {
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
    notifications.show({
      title: "Mantine Form",
      message: "Form has passed validation and is submitted",
      color: "green",
    })
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
              aria-invalid={form.getInputProps("password")?.error?.length > 0}
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm password"
              visible={visible}
              onVisibilityChange={toggle}
              visibilityToggleButtonProps={{
                "aria-label": "Toggle password visibility",
              }}
              aria-invalid={
                form.getInputProps("confirmPassword")?.error?.length > 0
              }
              {...form.getInputProps("confirmPassword")}
            />
            <Button type="submit" mt="md">
              Submit
            </Button>
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
