import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  fromModal?: boolean;
}

const InputProduct: React.FC<InputProps> = ({
  name,
  fromModal = false,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isModal={fromModal} isErrored={!!error}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />

      {error && (
        <Error title={error}>
          <FiAlertCircle size={18} color="#c2185b" />
        </Error>
      )}
    </Container>
  );
};

export default InputProduct;
