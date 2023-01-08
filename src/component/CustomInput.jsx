import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CustomInput({ label, onChange, name, value, disabled }) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={label} variant="outlined" onChange={onChange} name={name} value={value} disabled={disabled} type='number' />
        </Box>
    );
}
