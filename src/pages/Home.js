import styled from 'styled-components';

import { userData } from 'data';
import { phone } from 'responsive';
import Chart from 'components/Chart';
import WidgetSm from 'components/WidgetSm';
import WidgetLg from 'components/WidgetLg';
import FeaturedInfo from 'components/FeaturedInfo';

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
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
`;

const Widget = styled.div`
  display: flex;
  margin: 2rem;

  ${phone({ flexDirection: 'column' })}
`;

export default Home;
