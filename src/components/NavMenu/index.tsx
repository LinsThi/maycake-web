import React, { ButtonHTMLAttributes, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';

import { Div, Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>;
  isFirst?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, icon: Icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleButtonFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  return (
    <Div isFocused={isFocused}>
      <Container
        type="button"
        onFocus={handleButtonFocus}
        onBlur={handleButtonFocus}
      >
        <Icon size={24} />
        <p style={{ color: '#c2185b' }}>{children}</p>
      </Container>
    </Div>
  );
};

export default Button;
