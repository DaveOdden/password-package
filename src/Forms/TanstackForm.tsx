import { z } from "zod"
import {
  Center,
  Paper,
  Stack,
  Button,
  PasswordInput,
  Title,
} from "@mantine/core"
import { useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import { useDisclosure } from "@mantine/hooks"
import { customZodSchema } from "zod-password-validation-schema"
import { notifications } from "@mantine/notifications"

export const TanstackForm = () => {
  const [visible, { toggle }] = useDisclosure(false)

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

  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    } as z.infer<typeof customZodSchema>,
    onSubmit: async () => submitForm,
    validatorAdapter: zodValidator,
  })

  const submitForm = (values: IPasswordFormFields) => {
    console.log("Tanstack Form - Submit")
    console.log(values)
    notifications.show({
      title: "TanStack Form",
      message: "Form has passed validation and is submitted",
      color: "green",
    })
  }

  return (
    <Center>
      <Paper w={350} withBorder shadow="md" p={30} mt={30} radius="md">
        <form.Provider>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (form.state.isTouched && form.state.canSubmit)
                submitForm(form.state.values)

              if (!form.state.isTouched) {
                form.setFieldMeta("password", {
                  touchedErrors: ["Required"],
                  isTouched: true,
                  errors: ["Required"],
                  errorMap: { onChange: "Required" },
                  isValidating: false,
                })
                form.setFieldMeta("confirmPassword", {
                  touchedErrors: ["Required"],
                  isTouched: true,
                  errors: ["Required"],
                  errorMap: { onChange: "Required" },
                  isValidating: false,
                })
              }
            }}
          >
            <Stack>
              <Title order={2}>Tanstack Form</Title>

              <form.Field
                name="password"
                validators={{
                  onChange: () => {
                    let fm = formValidator(customZodSchema)({
                      password: form.getFieldValue("password"),
                      confirmPassword: form.getFieldValue("confirmPassword"),
                    })
                    return fm.password ? fm.password[0] : undefined
                  },
                }}
                validatorAdapter={zodValidator}
                children={(field) => {
                  return (
                    <>
                      <PasswordInput
                        name={field.name}
                        label="Password"
                        visible={visible}
                        onVisibilityChange={toggle}
                        visibilityToggleButtonProps={{
                          "aria-label": "Toggle password visibility",
                        }}
                        value={field.state.value ?? ""}
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          field.handleChange(e.target.value)
                        }}
                        error={
                          field.state.meta.isTouched &&
                          field.state.meta.errors.length > 0
                            ? field.state.meta.errors
                            : null
                        }
                      />
                    </>
                  )
                }}
              />

              <form.Field
                name="confirmPassword"
                validators={{
                  onChange: () => {
                    let fm = formValidator(customZodSchema)({
                      password: form.getFieldValue("password"),
                      confirmPassword: form.getFieldValue("confirmPassword"),
                    })

                    return fm.confirmPassword
                      ? fm.confirmPassword[0]
                      : undefined
                  },
                }}
                validatorAdapter={zodValidator}
                children={(field) => {
                  return (
                    <PasswordInput
                      name={field.name}
                      label="Password"
                      visible={visible}
                      onVisibilityChange={toggle}
                      visibilityToggleButtonProps={{
                        "aria-label": "Toggle password visibility",
                      }}
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => {
                        form.validateAllFields("change")
                        field.handleChange(e.target.value)
                      }}
                      error={
                        field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0
                          ? field.state.meta.errors
                          : null
                      }
                    />
                  )
                }}
              />
              <Button type="submit" mt="md">
                Submit
              </Button>
            </Stack>
          </form>
        </form.Provider>
      </Paper>
    </Center>
  )
}

interface IPasswordFormFields {
  password: string
  confirmPassword: string
}
