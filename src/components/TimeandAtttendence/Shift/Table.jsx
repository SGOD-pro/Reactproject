import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEmpData } from '../../../context';
const columns = [

    {
        field: 'shiftName',
        headerName: 'SHIFT NAME',
        width: 150,
    },
    {
        field: 'startTime',
        headerName: 'START TIME',
        width: 150,
        editable: true,
    },
    {
        field: 'endTime',
        headerName: 'END TIME',
        width: 150,
    },
    {
        field: 'entryGP',
        headerName: 'GRACE ENTRY PERIOD',
        width: 200,
    },
    {
        field: 'exitGP',
        headerName: 'GRACE EXIT PERIOD',
        width: 200,
    },
    {
        field: 'empCount',
        headerName: 'EMP COUNT',
        type: 'number',
        width: 110,
    },
];

export default function Table() {
    const { shiftTableData } = useEmpData()
    console.log(shiftTableData);
    const rows = shiftTableData
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                
                sx={{
                    '& .MuiSvgIcon-root': {
                        color: '#f4f4f4',
                    },
                    '& .MuiToolbar-root': {
                        color: '#f4f4f4',
                    },
                    width: "100%",
                    color: "#f4f4f4"
                }}
            />
        </Box>
    );
}