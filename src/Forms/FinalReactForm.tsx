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

export const FinalReactForm = () => {
  const [visible, { toggle }] = useDisclosure(false)

  const submitForm = (values: IPasswordFormFields) => {
    console.log("Formik Form - Submit")
    console.log(values)
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
          render={() => (
            <Stack>
              <Title order={2}>Final React Form</Title>

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
                    {...input}
                  />
                )}
              </Field>

              <Button type="submit">Submit</Button>
            </Stack>
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
