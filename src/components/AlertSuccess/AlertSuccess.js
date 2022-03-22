import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertSuccess(props) {

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={props.onClose}> {props.alertText}</Alert>
     
    </Stack>
  );
}

