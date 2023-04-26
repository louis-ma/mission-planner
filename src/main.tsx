import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './TS';
import { StyledEngineProvider } from '@mui/material/styles';
import Grid from './grid';
// import { Grid } from '@material-ui/core';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Example />
//   </React.StrictMode>,
// );


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Grid />
    </StyledEngineProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <Grid container spacing={2}>
//     <Grid item xs={6}>
//       {/* App 1 */}
//     </Grid>
//     <Grid item xs={6}>
//       {/* App 2 */}
//     </Grid>
//     <Grid item xs={6}>
//       {/* App 3 */}
//     </Grid>
//     <Grid item xs={6}>
//       {/* App 4 */}
//     </Grid>
//   </Grid>
// );

// // function App() {
// //   return (
// //     <Grid container spacing={2}>
// //       <Grid item xs={6}>
// //         {/* App 1 */}
// //       </Grid>
// //       <Grid item xs={6}>
// //         {/* App 2 */}
// //       </Grid>
// //       <Grid item xs={6}>
// //         {/* App 3 */}
// //       </Grid>
// //       <Grid item xs={6}>
// //         {/* App 4 */}
// //       </Grid>
// //     </Grid>
// //   );
// // }