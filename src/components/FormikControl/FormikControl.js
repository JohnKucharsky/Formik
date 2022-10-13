import { FormControl } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import { Fragment } from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "../TextError";

function ChakraInput(props) {
    const { label, name, ...rest } = props;
    return (
        <Field name={name}>
            {({ field, form }) => {
                return (
                    <FormControl
                        isInvalid={form.errors[name] && form.touched[name]}>
                        <Input
                            id={name}
                            placeholder={name}
                            {...rest}
                            {...field}
                        />
                    </FormControl>
                );
            }}
        </Field>
    );
}

function DatePicker(props) {
    const { label, name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {({ form, field }) => {
                    return (
                        <DateView
                            id={name}
                            {...field}
                            {...rest}
                            selected={field.value}
                            onChange={(val) => form.setFieldValue(name, val)}
                        />
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map((option) => {
                        return (
                            <Fragment key={option.key}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>
                                    {option.key}
                                </label>
                            </Fragment>
                        );
                    });
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

function RadioButton(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map((option) => {
                        return (
                            <Fragment key={option.key}>
                                <input
                                    type="radio"
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>
                                    {option.key}
                                </label>
                            </Fragment>
                        );
                    });
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

function Select(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <label htmlFor={name}> {label} </label>
            <Field as="select" id={name} name={name} {...rest}>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    );
                })}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

function Textarea(props) {
    const { label, name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} as="textarea" />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

function Input(props) {
    const { label, name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default function FormikControl(props) {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <Input {...rest} />;
        case "textarea":
            return <Textarea {...rest} />;
        case "select":
            return <Select {...rest} />;
        case "radio":
            return <RadioButton {...rest} />;
        case "checkbox":
            return <CheckboxGroup {...rest} />;
        case "date":
            return <DatePicker {...rest} />;
        case "chakrainput":
            return <ChakraInput {...rest} />;
        default:
            return null;
    }
}
