import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl/FormikControl";

export default function LoginForm() {
    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });

    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formik) => {
                return (
                    <Form>
                        <FormikControl
                            control="chakrainput"
                            type="email"
                            label="Email"
                            name="email"
                        />
                        <FormikControl
                            control="chakrainput"
                            type="password"
                            label="Password"
                            name="password"
                        />
                        <button disabled={!formik.isValid} type="submit">
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
