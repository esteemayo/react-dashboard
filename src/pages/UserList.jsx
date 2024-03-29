import styled from 'styled-components';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

import { userColumns, userRows } from 'data';
import { useGlobalContext } from 'context/darkMode/DarkModeContext';

const UserList = () => {
  const { darkMode } = useGlobalContext();
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this?'))
      setData((data) => {
        return data.filter((item) => item.id !== id);
      });
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='user__link'>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              style={{ fontSize: '2rem', cursor: 'pointer' }}
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
        columns={userColumns.concat(actionColumn)}
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
  background-color: ${({ theme }) => theme.btnEdit};
  color: ${({ theme }) => theme.textEdit};
  border-radius: 10rem;
  cursor: pointer;
  margin-right: 1rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    transform: translateX(-3px);
  }

  &:focus {
    outline: none;
  }
`;

export default UserList;
