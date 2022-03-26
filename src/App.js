import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Error,
  Home,
  Login,
  NewProduct,
  NewUser,
  Product,
  ProductList,
  User,
  UserList,
} from 'pages/index';
import Topbar from 'components/Topbar';
import Sidebar from 'components/Sidebar';

import './App.css';

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='users' element={<UserList />} />
          <Route path='user/:id' element={<User />} />
          <Route path='new-user' element={<NewUser />} />
          <Route path='products' element={<ProductList />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='new-product' element={<NewProduct />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export default App;
