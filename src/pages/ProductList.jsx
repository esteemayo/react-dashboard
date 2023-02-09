import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

import { productRows } from 'data';
import { useGlobalContext } from 'context/darkMode/DarkModeContext';

const ProductList = () => {
  const { darkMode } = useGlobalContext();
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData((data) => {
      return data.filter((item) => item.id !== id);
    });
  };

  const columns = [

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className='product__link'>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              style={{
                fontSize: '2rem',
                color: '#ff0000',
                cursor: 'pointer',
              }}
              className={darkMode ? 'delete__dark' : 'delete__light'}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        style={{ fontSize: '1.5rem' }}
        className={darkMode && 'data__grid'}
      />
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
`;

const EditButton = styled.button`
  border: none;
  display: block;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  background-color: #3bb077;
  color: var(--color-white);
  border-radius: 10rem;
  cursor: pointer;
  margin-right: 1rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    transform: translateX(3px);
  }

  &:focus {
    outline: none;
  }
`;

export default ProductList;
