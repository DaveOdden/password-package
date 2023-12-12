import { MantineForm } from "./Forms/MantineForm.tsx"
import { ReactHooksForm } from "./Forms/ReactHooksForm.tsx"
import { FormikForm } from "./Forms/FormikForm.tsx"
import { FinalReactForm } from "./Forms/FinalReactForm.tsx"

export const SLIDE_COMPONENTS = [
  {
    value: "0",
    key: "mantine-form",
    label: "Mantine Form",
    Component: MantineForm,
  },
  {
    value: "1",
    key: "react-hook-form",
    label: "React Hook Form",
    Component: ReactHooksForm,
  },
  {
    value: "2",
    key: "formik-form",
    label: "Formik Form",
    Component: FormikForm,
  },
  {
    value: "3",
    key: "final-react-form",
    label: "React Final Form",
    Component: FinalReactForm,
  },
]
