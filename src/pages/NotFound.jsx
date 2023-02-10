import styled from 'styled-components';
import { Link } from 'react-router-dom';

import notFoundImg from 'img/404.png';

const NotFound = () => {
  return (
    <Container>
      <Link to='/' className='notfound__link'>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  padding: 2rem;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
  object-fit: cover;
`;

export default NotFound;
