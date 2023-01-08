import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CustomButton({ label, onClick }) {
    return (
        <Button variant="contained" style={{ width: '100%' }} onClick={onClick}>{label}</Button>
    );
}
