import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const InputContainer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#232a36',
                borderRadius: '4px',
                padding: '16px',
                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <TextField
                label="Input Field"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                sx={{ backgroundColor: '#fff' }}
            />
        </Box>
    );
};

export default InputContainer;
