import React from 'react';
import Typography from '@mui/material/Typography';

const Header = (props) => {
    return (
        <Typography variant="h3" gutterBottom>
            {props.label}
        </Typography>
    );
}

export default Header;