import React, { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  changeIcon?: boolean;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  changeIcon: IconOcult,
  ...rest
}) => {
  const [hidePass, setHidePass] = useState(false);

  const changeInputTypePass = () => {
    setHidePass(!hidePass);
  };

  return (
    <Container>
      <Icon size={18} />
      <input type={hidePass ? 'text' : 'password'} {...rest} />
      {IconOcult && (
        <button type="button" id="ocult" onClick={changeInputTypePass}>
          {hidePass ? <BsEyeSlash size={18} /> : <BsEye size={18} />}
        </button>
      )}
    </Container>
  );
};

export default Input;
