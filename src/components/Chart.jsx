import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { useGlobalContext } from 'context/darkMode/DarkModeContext';

const Chart = ({ title, data, dataKey, grid }) => {
  const { darkMode } = useGlobalContext();

  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && (
            <CartesianGrid
              stroke='#e0dfdf'
              strokeDasharray='3 3'
              className={darkMode ? 'chart-grid-dark' : 'chart-grid-light'}
            />
          )}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
  -webkit-box-shadow: ${({ theme }) => theme.box};
  -moz-box-shadow: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.box};
`;

const Title = styled.h3`
  text-transform: capitalize;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 2rem;
`;

export default Chart;
