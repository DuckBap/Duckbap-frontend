export default function validateAuth(values) {
  let errors = {};
  // 이메일 에러 처리
  /*if (!values.email) {
    errors.email = '올바른 이메일 형식을 입력해주세요';
  } else */ 
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '유효하지 않은 이메일입니다';
  }
  // 비밀번호 에러 처리
 /* if (values.email && !values.password) {
    errors.password = '비밀번호를 입력해주세요';
  } else  */ 
  if (values.email && values.password.length < 8) {
    errors.password = '비밀번호는 최소 8자 이상이어야 합니다';
  }
  /*if (!values.email && !values.password)
  {
  
  }*/
  return errors;
}
