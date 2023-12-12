import { z } from "zod"
import {
  Center,
  Paper,
  Stack,
  Button,
  PasswordInput,
  Title,
} from "@mantine/core"
import { Form, Field } from "react-final-form"
import { useDisclosure } from "@mantine/hooks"
import { customZodSchema } from "zod-password-validation-schema"
import { notifications } from "@mantine/notifications"

export const ReactFinalForm = () => {
  const [visible, { toggle }] = useDisclosure(false)

  const submitForm = (values: IPasswordFormFields) => {
    console.log("React Final Form - Submit")
    console.log(values)
    notifications.show({
      title: "React Final Form",
      message: "Form has passed validation and is submitted",
      color: "green",
    })
  }

  const formValidator =
    <T extends z.ZodType<any, any>>(schema: T) =>
    (values: any) => {
      try {
        schema.parse(values)
        return {}
      } catch (err) {
        return (err as z.ZodError).formErrors.fieldErrors
      }
    }

  return (
    <Center>
      <Paper w={350} withBorder shadow="md" p={30} mt={30} radius="md">
        <Form
          onSubmit={submitForm}
          validate={formValidator(customZodSchema)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Stack>
                <Title order={2}>React Final Form</Title>

                <Field name="password">
                  {({ input, meta }) => (
                    <PasswordInput
                      label="Password"
                      visible={visible}
                      onVisibilityChange={toggle}
                      visibilityToggleButtonProps={{
                        "aria-label": "Toggle password visibility",
                      }}
                      error={meta.touched && meta.error ? meta.error[0] : null}
                      aria-invalid={meta.touched && meta.error ? true : false}
                      {...input}
                    />
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ input, meta }) => (
                    <PasswordInput
                      label="Confirm password"
                      visible={visible}
                      onVisibilityChange={toggle}
                      visibilityToggleButtonProps={{
                        "aria-label": "Toggle password visibility",
                      }}
                      error={meta.touched && meta.error ? meta.error[0] : null}
                      aria-invalid={meta.touched && meta.error ? true : false}
                      {...input}
                    />
                  )}
                </Field>

                <Button type="submit" mt="md">
                  Submit
                </Button>
              </Stack>
            </form>
          )}
        />
      </Paper>
    </Center>
  )
}

interface IPasswordFormFields {
  password: string
  confirmPassword: string
}
