import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


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
    },
    {
        field: 'gender',
        headerName: 'Gender',
    },
    {
        field: 'date_of_joining',
        headerName: 'D O J',
    },
    {
        field: 'department',
        headerName: 'Department',
    },
    {
        field: 'designation',
        headerName: 'Designation',
    },
    
];
const rows = [

];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%',color:"#f4f4f4" }}>
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
                    color: "#f4f4f4",
                    width:"100%",
                }}
            />
        </Box>
    );
}