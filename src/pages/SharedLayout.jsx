import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Topbar from 'components/Topbar';
import Sidebar from 'components/Sidebar';
import { useGlobalContext } from 'context/darkMode/DarkModeContext';

const SharedLayout = () => {
  const { darkMode } = useGlobalContext();

  return (
    <>
      <Topbar />
      <Container mode={darkMode}>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;

export default SharedLayout;
