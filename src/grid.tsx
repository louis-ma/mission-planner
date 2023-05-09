import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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

        <Grid xs={8}> //left side
            <Example /> 
        </Grid>

        <Grid xs={4}> //right side
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Timer />
              <iframe src="https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/2023/2023_EXPLORER_Manual_FINAL_1_17_2023_withcover.pdf"
                width="100%" height="600px"></iframe>
            </Stack>
          </Box>
        </Grid>

        <Grid>
        <iframe src="https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/2023/2023_EXPLORER_Manual_FINAL_1_17_2023_withcover.pdf"
     width="100%" height="600px"></iframe>
        </Grid>

      </Grid>
    </Box>
  );
}

// testing
// <Grid xs={4}> //right side
// <Timer /> 
// </Grid>

// <Grid>
// <iframe src="https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/2023/2023_EXPLORER_Manual_FINAL_1_17_2023_withcover.pdf"
// width="100%" height="600px"></iframe>
// </Grid>

// <Box sx={{ width: '100%' }}>
// <Stack spacing={2}>
//   <Timer />
//   <iframe src="https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/2023/2023_EXPLORER_Manual_FINAL_1_17_2023_withcover.pdf"
//     width="100%" height="600px"></iframe>
// </Stack>
// </Box>