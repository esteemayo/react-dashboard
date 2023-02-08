import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Topbar from 'components/Topbar';
import Sidebar from 'components/Sidebar';

const SharedLayout = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export default SharedLayout;
