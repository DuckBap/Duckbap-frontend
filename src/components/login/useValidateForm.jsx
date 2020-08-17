import { useState, useEffect } from 'react';

const useValidateForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(
    () => {
      if (isSubmitted) {
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
          alert(`잘되네유 ${values.email}`);
          console.log(`잘되네유... ${values.email}, ${values.password}`);
          setSubmitted(false);
          // 로그인 이벤트 수행되어야
        }
        /*  if (!${values.email} and ${values.password} 가
          correspond하지 않을 때) {
          alert('입력을 제대로 해 주세유');
        } */
      }
    },
    [errors, values.email, isSubmitted, values.password],
  );

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(true);
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitted,
  };
};

export default useValidateForm;
