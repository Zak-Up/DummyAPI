import React from 'react';

export const useForm = (initialForm, validateForm) => {

  const [form, setForm] = React.useState(initialForm);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = () => {};

  return{
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
