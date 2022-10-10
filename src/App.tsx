import React, { FC } from 'react';

import { Container, Grid, Typography } from '@mui/material';

const App: FC = () => {
  return (
    <Container>
      <Grid container p={3}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Projeto com WebGL
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
