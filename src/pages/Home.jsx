import styled from 'styled-components';

import { userData } from 'data';
import WidgetSm from 'components/WidgetSm';
import WidgetLg from 'components/WidgetLg';
import FeaturedInfo from 'components/FeaturedInfo';

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        grid
        data={userData}
        dataKey='Active User'
        title='User Analytics'
      />
      <Widget>
        <WidgetSm />
        <WidgetLg />
      </Widget>
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  background-color: ${({ theme }) => theme.bg};
`;

const Widget = styled.div`
  display: flex;
  margin: 2rem;

  ${phone({ flexDirection: 'column' })}
`;

export default Home;
