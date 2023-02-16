import styled from 'styled-components';
import { Visibility } from '@material-ui/icons';

import { phone } from 'responsive';
import defaultAvatar from 'img/avatar.png';

const WidgetSm = () => {
  return (
    <Container>
      <Title>New join members</Title>
      <List>
        {newUsers.map((user) => {
          const { id, img, name, occupation } = user;
          return (
            <ListItem key={id}>
              <Image src={defaultAvatar ?? img} alt='' />
              <UserContainer>
                <UserName>{name}</UserName>
                <UserTitle>{occupation}</UserTitle>
              </UserContainer>
              <Button>
                <Visibility style={{ fontSize: '1.6rem', marginRight: '0.5rem' }} />
                Display
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 2rem;
  margin-right: 2rem;
  -webkit-box-shadow: ${({ theme }) => theme.box};
  -moz-box-shadow: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.box};

  ${phone({
  marginBottom: '1rem',
  marginRight: 0,
})}
`;

const Title = styled.span`
  text-transform: capitalize;
  font-size: 2.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSoft};
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  font-size: 1.5rem;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  text-transform: capitalize;
  font-weight: 600;
`;

const UserTitle = styled.span`
  text-transform: capitalize;
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  text-transform: capitalize;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    transform: translateX(-3px);
  }
`;

export default WidgetSm;
