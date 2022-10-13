import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    channel: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
});
export default function YoutubeForm() {
    const [switchValues, setSwitchValues] = useState(false);
    const initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: "",
        address: "",
        social: {
            facebook: "",
            twitter: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [""],
    };

    const initialValuesSaved = {
        name: "name",
        email: "v.cd.com",
        channel: "channel",
        comments: "comments",
        address: "address",
        social: {
            facebook: "facebook",
            twitter: "twitter",
        },
        phoneNumbers: ["2342", "2342"],
        phNumbers: ["2342", "2434", "4234"],
    };
    const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.resetForm();
    };

    const errorString = (p) => <div className="error">{p.children}</div>;

    return (
        <Formik
            initialValues={!switchValues ? initialValues : initialValuesSaved}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={onSubmit}>
            {(formik) => {
                return (
                    <Form>
                        <div className="form_control">
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                            />

                            <ErrorMessage component={errorString} name="name" />
                        </div>
                        <div className="form_control">
                            <label htmlFor="email">E-mail</label>
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />

                            <ErrorMessage
                                component={errorString}
                                name="email"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="channel">Channel</label>
                            <Field
                                type="text"
                                id="channel"
                                name="channel"
                                placeholder="Channel"
                            />

                            <ErrorMessage
                                component={errorString}
                                name="channel"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="comments">Comments</label>
                            <Field
                                type="text"
                                id="comments"
                                name="comments"
                                placeholder="Comments"
                                as="textarea"
                            />
                            <ErrorMessage
                                component={errorString}
                                name="comments"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="address">Address</label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address">
                                {({ field, meta }) => {
                                    return (
                                        <div>
                                            <input
                                                type="text"
                                                {...field}
                                                id="address"
                                            />
                                        </div>
                                    );
                                }}
                            </Field>

                            <ErrorMessage
                                component={errorString}
                                name="address"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="facebook">Facebook</label>
                            <Field
                                type="text"
                                id="facebook"
                                name="social.facebook"
                                placeholder="Facebook"
                            />

                            <ErrorMessage
                                component={errorString}
                                name="social.facebook"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="twitter">Twitter</label>
                            <Field
                                type="text"
                                id="twitter"
                                name="social.twitter"
                                placeholder="Twitter"
                            />

                            <ErrorMessage
                                component={errorString}
                                name="social.twitter"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="primaryNumber">
                                Primary Number
                            </label>
                            <Field
                                type="text"
                                id="primaryNumber"
                                name="phoneNumbers[0]"
                                placeholder="Primary Number"
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="secondaryNumber">
                                Secondary Number
                            </label>
                            <Field
                                type="text"
                                id="secondaryNumber"
                                name="phoneNumbers[1]"
                                placeholder="Secondary Number"
                            />
                        </div>

                        <div className="form-control">
                            <label>List of phone numbers</label>
                            <FieldArray name="phNumbers">
                                {({ push, remove, form }) => {
                                    return (
                                        <div>
                                            {form.values.phNumbers.map(
                                                (phNumber, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`phNumbers[${index}]`}
                                                        />
                                                        {index > 0 && (
                                                            <button
                                                                onClick={() =>
                                                                    remove(
                                                                        index,
                                                                    )
                                                                }
                                                                type="button">
                                                                -
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() =>
                                                                push("")
                                                            }
                                                            type="button">
                                                            +
                                                        </button>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    );
                                }}
                            </FieldArray>
                        </div>
                        {/* !formik.isValid */}
                        <button type="reset">Reset</button>
                        <button
                            onClick={() => setSwitchValues((prev) => !prev)}
                            type="button">
                            Load
                        </button>
                        <button disabled={!formik.isValid} type="submit">
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
