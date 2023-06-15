import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function StaticDatePickerLandscape() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        p: 2,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 400,
          background: 'linear-gradient(180deg, #086a87 35.54%, #75dbd9 164.66%)',
          color: 'white',
          p: 2,
          border: '2px solid white',
          width: '100%',
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" align="center">
          <Button
            component={Link}
            to="/contact/:id"
            variant="outlined"
            color="inherit"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Book Now
          </Button>
        </Typography>
      </Card>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            minHeight={180}
            sx={{
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}
          >
            <Stack>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="landscape" />
              </LocalizationProvider>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
