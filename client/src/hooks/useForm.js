import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    // TODO: add support for checkbox
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

        const submitHandler = (e) => {
            e.preventDefualt();
            submitCallback(values);
        }

    return {
        changeHandler, values
    };
}