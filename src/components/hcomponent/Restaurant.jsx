import React from 'react';
import RM1 from "../../Images/restaurantmenu/rm1.jpg";
import './Restaurant.css';
import { Typography } from '@mui/material';

const Restaurant = () => {
    return (
        <div className="restaurant-container">
            <Typography variant='h3' textAlign="center" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                Menu
            </Typography>
            <br />
            <div className="image-container">
                <img src={RM1} alt="Restaurant Menu" className="menu-image" />
            </div>
        </div>
    );
};

export default Restaurant;
