import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  text-align: left;
  ::placeholder {
    color: #b8b8b8;
    font-weight: none;
  }
  margin: 0.3rem;
`;

const Input = ({
  className, value, onChange, type, error, success, ...props
}) => (
  <div>
    <InputStyle className={`padding-xs ${error ? 'input-error' : ''} 
    ${success ? 'input-success' : ''} ${className}`} 
    value={value} onChange={onChange} type={type} {...props} />
    {error ? <div className="red-text text-left form-input-message">{error}</div> : null}
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  error: '',
  success: false,
  className: '',
};

export default Input;
