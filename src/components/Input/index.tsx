import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  changeIcon?: boolean;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  changeIcon: IconOcult,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [hidePass, setHidePass] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  const handleChangeInputTypePass = useCallback(() => {
    setHidePass(!hidePass);
  }, [hidePass]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon size={18} />
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        type={hidePass ? 'text' : 'password'}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle size={18} color="#c2185b" />
        </Error>
      )}

      {IconOcult && !error && (
        <button type="button" id="ocult" onClick={handleChangeInputTypePass}>
          {hidePass ? <BsEyeSlash size={18} /> : <BsEye size={18} />}
        </button>
      )}
    </Container>
  );
};

export default Input;
