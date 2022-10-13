import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    channel: Yup.string().required("Required"),
});
export default function YoutubeForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: "",
        },
        onSubmit: (values) => {},
        validationSchema,
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form_control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        {...formik.getFieldProps("name")}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <div className="error">{formik.errors.name}</div>
                    )}
                </div>
                <div className="form_control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                </div>
                <div className="form_control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        {...formik.getFieldProps("channel")}
                    />
                    {formik.errors.channel && formik.touched.channel && (
                        <div className="error">{formik.errors.channel}</div>
                    )}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
