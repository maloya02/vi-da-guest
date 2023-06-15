import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import PL1 from "../../Images/poolpic/pl1.JPG";
import PL2 from "../../Images/poolpic/pl2.jpg";
import PL3 from "../../Images/poolpic/pl3.jpg";

const Pools = () => {
  return (
    <>
      <Typography textAlign="center" variant="h3" mt={4}>
        <h1>Pools</h1>
      </Typography>
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, justifyContent: 'center' }}
      >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1, height: 400, margin: '16px' }}>
          <CardCover>
            <img
              src={PL1}
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                padding: 2,
                borderRadius: 4,
              }}
            >
              <Typography
                level="h1"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Deep Pool
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1, height: 400, margin: '16px' }}>
          <CardCover>
            <img
              src={PL2}
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                padding: 2,
                borderRadius: 4,
              }}
            >
              <Typography
                level="h1"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Slide Pool
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1, height: 400, margin: '16px' }}>
          <CardCover>
            <img
              src={PL3}
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                padding: 2,
                borderRadius: 4,
              }}
            >
              <Typography
                level="h1"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Kids Pool
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Pools;
