import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import { Typography, Grid } from '@mui/material';
import SP1 from "../../Images/servicepic/sp1.JPG";
import SP2 from "../../Images/servicepic/sp2.JPG";
import SP3 from "../../Images/servicepic/sp3.jpg";

const ServiceCards = () => {
  return (
    <>
      <Typography variant="h3" textAlign="center" mt={4}>
        Services
      </Typography>
      <br />
      <Grid container justifyContent="center" spacing={2} sx={{ padding: '0 16px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={SP1}
                  srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography variant="h2" fontSize="md">
                Rooms
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                Family Room, Regular Room, Cabin House
              </Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
              <Divider inset="context" />
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="body3" fontWeight="md" textColor="text.secondary">
                  Overnight - One day
                </Typography>
                <Divider orientation="vertical" sx={{ mx: 1 }} />
                <Typography variant="body3" fontWeight="md" textColor="text.secondary">
                  1500-6000 Php
                </Typography>
              </CardContent>
            </CardOverflow>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={SP2}
                  srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography variant="h2" fontSize="md">
                Attractions
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                Pools,Slides, Etc.
              </Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
              <Divider inset="context" />
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="body3" fontWeight="md" textColor="text.secondary">
                  Entrance Fee: Kids,Senior,Adult
                </Typography>
                <Divider orientation="vertical" sx={{ mx: 1 }} />
                <Typography variant="body3" fontWeight="md" textColor="text.secondary">
                  50, 80, 100 Php
                </Typography>
              </CardContent>
            </CardOverflow>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={SP3}
                  srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography variant="h2" fontSize="md">
                Restaurant
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                Break fast, Lunch, Dinner
              </Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
              <Divider inset="context" />
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="body3" fontWeight="md" textColor="text.secondary">
                  Menu
                </Typography>
                <Divider orientation="vertical" sx={{ mx: 1 }} />
                <Typography variant="body3" fontWeight="md" textColor="text.secondary">
                  180-380 Php
                </Typography>
              </CardContent>
            </CardOverflow>
          </Card>
        </Grid>
      </Grid>
      <br />
    </>
  );
};

export default ServiceCards;
