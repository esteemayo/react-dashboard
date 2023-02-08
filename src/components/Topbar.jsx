import styled from 'styled-components';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

import { useGlobalContext } from 'context/darkMode/DarkModeContext';

const Topbar = () => {
  const { darkMode, toggle } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <TopLeft>
          <Logo>Dashboard</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNone style={{ fontSize: '2rem' }} />
            <TopIconBadge>2</TopIconBadge>
          </IconContainer>
          <IconContainer>
            <Language style={{ fontSize: '2rem' }} />
            <TopIconBadge>2</TopIconBadge>
          </IconContainer>
          <IconContainer>
            <Settings style={{ fontSize: '2rem' }} />
          </IconContainer>
          <Image src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </TopRight>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Great Vibes', cursive;
  color: #00008b;
  cursor: pointer;
`;

const TopRight = styled.span`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 1rem;
  color: #555;
`;

const Mode = styled.span`
  text-transform: uppercase;
  font-size: 1.35rem;
`;

const TopIconBadge = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.5rem;
  right: 0;
  background-color: #ff0000;
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  cursor: pointer;
`;

export default Topbar;
