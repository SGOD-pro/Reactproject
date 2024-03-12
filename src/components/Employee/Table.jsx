import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEmpData } from '../../context';

export default function DataGridDemo() {
    const columns = [
        {
            field: 'empId',
            headerName: 'Emp Id',
            sortable: false,
            width: 150,
        },
        {
            field: 'first_Name',
            headerName: 'First name',
            width: 120,
        },
        {
            field: 'middle_Name',
            headerName: 'Middle name',
            width: 120,
        },
        {
            field: 'last_Name',
            headerName: 'Last Name',
            width: 120,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 120,
        },
        {
            field: 'date_of_joining',
            headerName: 'D O J',
            width: 150,
        },
        {
            field: 'department',
            headerName: 'Department',
            width: 160,
        },
        {
            field: 'designation',
            headerName: 'Designation',
            width: 160,
        },

    ];
    const { empTableData } = useEmpData()
    console.log(empTableData);
    const rows = empTableData;

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
                    '& .MuiToolbar-root': {
                        color: '#f4f4f4',
                    },
                    '& .MuiSvgIcon-root': {
                        color: '#f4f4f4',
                    },
                    width: "100%",
                    color: "#f4f4f4"
                }}
            />
        </Box>
    );
}