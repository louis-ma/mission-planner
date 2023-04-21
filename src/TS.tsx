import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef, type MaterialReactTableProps} from 'material-react-table';
import { data, type Person } from './makeData';

const Example = (factory: () => T, deps: React.DependencyList | undefined) => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'SubID',
        accessorKey: 'subID',
      },
      {
        header: 'Name',
        accessorKey: 'taskName',
      },
      {
        header: 'Status',
        accessorKey: 'status',
          lookup:{1: 'todo', 2: "doing", 3: "done"},
      },
      {
        header: 'Scores',
        accessorKey: 'scores',
      },
    ],
      "export const deps: string[];"
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableEditing={true}

      enableColumnResizing
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      initialState={{
        density: 'compact',
        expanded: true, //expand all groups by default
        //grouping: ['state'], //an array of columns to group by by default (can be multiple)
        //pagination: { pageIndex: 0, pageSize: 20 },
        //sorting: [{ id: 'state', desc: false }], //sort by state by default
      }}
      muiToolbarAlertBannerChipProps={{ color: 'primary' }}
      //muiTableContainerProps={{ sx: { maxHeight: 700 } }}
    />
  );
};

export default Example;
