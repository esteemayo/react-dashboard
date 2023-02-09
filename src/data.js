import styled from 'styled-components';

export const userData = [
  {
    name: 'Jan',
    'Active User': 4000,
  },
  {
    name: 'Feb',
    'Active User': 3000,
  },
  {
    name: 'Mar',
    'Active User': 5000,
  },
  {
    name: 'Apr',
    'Active User': 4000,
  },
  {
    name: 'May',
    'Active User': 3000,
  },
  {
    name: 'Jun',
    'Active User': 2000,
  },
  {
    name: 'Jul',
    'Active User': 4000,
  },
  {
    name: 'Aug',
    'Active User': 3000,
  },
  {
    name: 'Sep',
    'Active User': 4000,
  },
  {
    name: 'Oct',
    'Active User': 1000,
  },
  {
    name: 'Nov',
    'Active User': 4000,
  },
  {
    name: 'Dec',
    'Active User': 3000,
  },
];

export const productData = [
  {
    name: 'Jan',
    Sales: 4000,
  },
  {
    name: 'Feb',
    Sales: 3000,
  },
  {
    name: 'Mar',
    Sales: 5000,
  },
];

export const userRows = [
  {
    id: 1,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 2,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 3,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 4,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 5,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 6,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 7,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 8,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 9,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 10,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
];

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <UserListUser>
          <Image src={params.row.avatar} />
          {params.row.username}
        </UserListUser>
      );
    },
  },
  { field: 'avatar', headerName: 'Avatar', width: 200 },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160,
  },
]

export const productRows = [
  {
    id: 1,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 2,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 3,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 4,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 5,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 6,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 7,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 8,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 9,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
  {
    id: 10,
    name: 'Apple airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: 'active',
    price: '$120.00',
  },
];
