import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';

import { useGlobalContext } from 'context/darkMode/DarkModeContext';

const Sidebar = () => {
  const { dark, light } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <Title>Dashboard</Title>
          <SidebarList>
            <SidebarListItem>
              <Link to='/' className='sidebar__link'>
                <LineStyle
                  style={{ fontSize: '2rem', marginRight: '0.5rem' }}
                />
                Home
              </Link>
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <Title>Quick menu</Title>
          <SidebarList>
            <SidebarListItem>
              <Link to='/users' className='sidebar__link'>
                <PermIdentity
                  style={{ fontSize: '2rem', marginRight: '0.5rem' }}
                />
                Users
              </Link>
            </SidebarListItem>
            <SidebarListItem>
              <Link to='/products' className='sidebar__link'>
                <Storefront
                  style={{ fontSize: '2rem', marginRight: '0.5rem' }}
                />
                Products
              </Link>
            </SidebarListItem>
            <SidebarListItem>
              <AttachMoney
                style={{ fontSize: '2rem', marginRight: '0.5rem' }}
              />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <Title>Notifications</Title>
          <SidebarList>
            <SidebarListItem>
              <MailOutline
                style={{ fontSize: '2rem', marginRight: '0.5rem' }}
              />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeed
                style={{ fontSize: '2rem', marginRight: '0.5rem' }}
              />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline
                style={{ fontSize: '2rem', marginRight: '0.5rem' }}
              />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <Title>Staff</Title>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline
                style={{ fontSize: '2rem', marginRight: '0.5rem' }}
              />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              Reports
            </SidebarListItem>
          </SidebarList>
          <Bottom>
            <Light onClick={light}></Light>
            <Dark onClick={dark}></Dark>
          </Bottom>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.bgLight};
  position: sticky;
  top: 5rem;
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
`;

const SidebarMenu = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0.5rem;
`;

const SidebarListItem = styled.li`
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  display: flex;
  align-items: center;
  border-radius: 1rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  & > * {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.toggleBtn};
    outline-color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

const Light = styled.button`
  background-color: whitesmoke;
`;

const Dark = styled.button`
  background-color: #333;
`;

export default Sidebar;
