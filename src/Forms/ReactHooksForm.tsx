import { useForm } from "react-hook-form"
import { Center, Paper, Stack, Button, Title } from "@mantine/core"
import { PasswordInput } from "react-hook-form-mantine"
import { useDisclosure } from "@mantine/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { customZodSchema } from "zod-password-validation-schema"
import { notifications } from "@mantine/notifications"

export const ReactHooksForm = () => {
  const [visible, { toggle }] = useDisclosure(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(customZodSchema),
  })

  const submitForm = (values: IPasswordFormFields) => {
    console.log("React Hook Form - Submit")
    console.log(values)
    notifications.show({
      title: "React Hook Form",
      message: "Form has passed validation and is submitted",
    })
  }

  return (
    <Center>
      <Paper w={350} withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(submitForm)}>
          <Stack>
            <Title order={2}>React Hook Form</Title>
            <PasswordInput
              name="password"
              label="Password"
              visible={visible}
              onVisibilityChange={toggle}
              visibilityToggleButtonProps={{
                "aria-label": "Toggle password visibility",
              }}
              control={control}
            />
            <PasswordInput
              name="confirmPassword"
              label="Confirm password"
              visible={visible}
              onVisibilityChange={toggle}
              visibilityToggleButtonProps={{
                "aria-label": "Toggle password visibility",
              }}
              control={control}
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
