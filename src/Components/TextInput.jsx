import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput(props) {
   const { label } = props;
    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </Box>
  );
}
