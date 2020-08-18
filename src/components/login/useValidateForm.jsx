import { useState, useEffect } from 'react';

const useValidateForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(
    () => {
      if (isSubmitted) {
        const noErrors = Object.keys(errors).length === 0;
        // 비밀번호 맞았을 때 
        if (noErrors /* &&  */) {
          alert(`${values.email}로 로그인 성공`);
          console.log(`login success! ${values.email}, ${values.password}`);
          setSubmitted(false);
        }
      }
    },[errors, isSubmitted, values.email, values.password]
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
    // validate -> 유효성 검사로 넘어가긴
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(true);
  }

  const onFacebookBtn = (e) => {
    alert('FaceBook Login');
    console.log('FaceBook SignUp');
  }
  
  const onNaverBtn = (e) => {
    alert('Naver Login');
    console.log("Naver SignUp");
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitted,
    onNaverBtn,
    onFacebookBtn, 
  };
};

export default useValidateForm;
