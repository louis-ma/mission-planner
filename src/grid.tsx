import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Timer from "./Timer"; // for timer
import Example from './TS'; // for the list


const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

//might need -npm install @mui/material @emotion/react @emotion/styled
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
            <Example /> 
        </Grid>
        <Grid xs={4}>
            <Timer /> 
        </Grid>
        
      </Grid>
    </Box>
  );
}
