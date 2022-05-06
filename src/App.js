import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Error,
  Home,
  Login,
  NewProduct,
  NewUser,
  Product,
  ProductList,
  SharedLayout,
  User,
  UserList,
} from 'pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<UserList />} />
          <Route path='user/:id' element={<User />} />
          <Route path='new-user' element={<NewUser />} />
          <Route path='products' element={<ProductList />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='new-product' element={<NewProduct />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
