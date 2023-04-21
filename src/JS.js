import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import data from './data.json';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Task',
        accessorKey: 'task',
      },
      {
        header: 'Scores',
        accessorKey: 'scores',
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Scores',
        accessorKey: 'scores',
      },
      {
        header: 'Name',
        accessorKey: 'taskName',
      },
    ],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}

      enableColumnResizing
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      enableColumnDragging={true}
      initialState={{
        density: 'compact',
        expanded: true, //expand all groups by default
        //grouping: ['state'], //an array of columns to group by by default (can be multiple)
        pagination: { pageIndex: 0, pageSize: 20 },
        //sorting: [{ id: 'state', desc: false }], //sort by state by default
      }}
      muiToolbarAlertBannerChipProps={{ color: 'primary' }}
      muiTableContainerProps={{ sx: { maxHeight: 700 } }}
      editable={{
    onRowAdd: (newData) =>
      new Promise((resolve, reject) => {
        // Handle adding a new row
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        // Handle updating a row
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        // Handle deleting a row
      }),
  }}
    />
  );
};

export default Example;
