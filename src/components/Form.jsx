import { useState } from "react";

const Form = ({children, initialState, onSubmit}) => {
    const [values, setValues]= useState(initialState);

    const handleChange = e => {
        const {name, value} = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(values);
    }

    return children({values, handleChange, handleSubmit});
};

export default Form;