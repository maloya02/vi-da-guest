import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import AspectRatio from '@mui/joy/AspectRatio';
import RP1 from '../../Images/roompic/rp1.JPG';
import RP2 from '../../Images/roompic/rp2.JPG';
import RP3 from '../../Images/roompic/rp3.jpg';
import Grid from '@mui/joy/Grid';


const Rooms = () => {
    return (
        <div>
            <Typography variant='h1' textAlign="center" >
                <h1>Rooms</h1> 
            </Typography>
            <br />
            <Grid gap={2} container spacing={2} sx={{ flexGrow: 1, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <Grid>
                    <Card variant="outlined" sx={{ width: 600 }}>
                        <div>
                            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                Family Room
                            </Typography>
                            <Typography level="body2">3-6 Pax</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                            >

                            </IconButton>
                        </div>
                        <AspectRatio minHeight="300px" maxHeight="400px">
                            <img
                                src={RP1}
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography level="body3">Total price:</Typography>
                                <Typography fontSize="lg" fontWeight="lg">
                                    $2,900
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="sm"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                sx={{
                                    ml: 'auto',
                                    fontWeight: 600,
                                    background: 'linear-gradient(180deg, #086a87 35.54%, #75dbd9 164.66%)',
                                  }}
                            >
                                Reserve
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Card variant="outlined" sx={{ width: 600 }}>
                        <div>
                            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                Cabin
                            </Typography>
                            <Typography level="body2">3-6 Pax</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                            >

                            </IconButton>
                        </div>
                        <AspectRatio minHeight="300px" maxHeight="400px">
                            <img
                                src={RP2}
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography level="body3">Total price:</Typography>
                                <Typography fontSize="lg" fontWeight="lg">
                                    $2,900
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="sm"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                sx={{
                                    ml: 'auto',
                                    fontWeight: 600,
                                    background: 'linear-gradient(180deg, #086a87 35.54%, #75dbd9 164.66%)',
                                  }}
                            >
                                Reserve
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Card variant="outlined" sx={{ width: 600 }}>
                        <div>
                            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                Studio Room
                            </Typography>
                            <Typography level="body2">3-6 Pax</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                            >

                            </IconButton>
                        </div>
                        <AspectRatio minHeight="300px" maxHeight="400px">
                            <img
                                src={RP3}
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography level="body3">Total price:</Typography>
                                <Typography fontSize="lg" fontWeight="lg">
                                    $2,900
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="sm"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                sx={{
                                    ml: 'auto',
                                    fontWeight: 600,
                                    background: 'linear-gradient(180deg, #086a87 35.54%, #75dbd9 164.66%)',
                                  }}
                            >
                                Reserve
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </div>




    );
}

export default Rooms;
