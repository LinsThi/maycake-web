import React from 'react';

import { Container } from './styles';

const Baseboard: React.FC = () => {
  return (
    <Container>
      <strong>&copy; May Cake - Todos os direitos reservados</strong>
      <p>
        &lt;/&gt; Desenvolvido por{' '}
        <a href="https://github.com/LinsThi" target="blank">
          Lins
        </a>
      </p>
    </Container>
  );
};

export default Baseboard;
