import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Header from '../components/header.js';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <Header label="Log In" />
            <FormControl variant="standard">
                <TextField
                    required
                    label="Email or Username" 
                    InputProps={{
                        // startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
                    }}
                />
                <TextField
                    required
                    label="Password" 
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: 
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
                <Button variant="contained">Log In</Button>
            </FormControl>
        </div>
    );
}

export default Login;