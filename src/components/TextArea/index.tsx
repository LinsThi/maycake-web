import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  fromModal?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  fromModal = false,
  ...rest
}) => {
  const textRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isModal={fromModal} isErrored={!!error}>
      <textarea defaultValue={defaultValue} ref={textRef} {...rest} />

      {error && (
        <Error title={error}>
          <FiAlertCircle size={18} color="#c2185b" />
        </Error>
      )}
    </Container>
  );
};

export default TextArea;
