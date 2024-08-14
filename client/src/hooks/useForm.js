import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, reinitializeForm = false) {
    const [values, setValues] = useState(initialValues || {});

    useEffect(() => {
        if (reinitializeForm) {     
            setValues(initialValues)
        }
    }, [initialValues]);

    // TODO: add support for checkbox
    const handleChange = (e) => {
        setValues(state => ({   
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitCallback(values);
        setValues(initialValues);
    };

    return {
        values,
        changeHandler: handleChange,
        submitHandler: handleSubmit,
        setValues,
    };
}