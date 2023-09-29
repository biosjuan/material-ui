'use client';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useCallback } from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import { contactData } from '@/Data/ContactData';

const columns = (theme: Theme): GridColDef[] => [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,

    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
  {
    field: 'skills',
    headerName: 'Skills',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value ? cellValues.value[0] : ''}
        </div>
      );
    },
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },

  {
    field: 'preference',
    headerName: 'Preference',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
];

function ContactDataGrid() {
  const rows = () => [...contactData];
  const theme = useTheme();
  return (
    <DataGrid
      rows={rows()}
      columns={columns(theme)}
      initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
      pageSizeOptions={[5]}
      columnHeaderHeight={60}
      rowHeight={120}
    />
  );
}

export default ContactDataGrid;
