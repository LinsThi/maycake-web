import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>;
  loading?: boolean;
  small?: boolean;
  backgroundStyle?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  small = false,
  loading,
  backgroundStyle = false,
  ...rest
}) => {
  return (
    <Container
      type="button"
      {...rest}
      isSmall={small}
      isReverse={backgroundStyle}
    >
      {loading ? (
        <div className="loading" />
      ) : (
        <>
          <Icon />
          {children}
        </>
      )}
    </Container>
  );
};

export default Button;
