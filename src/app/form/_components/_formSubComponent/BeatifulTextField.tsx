import { TextField, TextFieldProps } from '@mui/material';
import { minWidth } from '../ContactForm';

function BeatifulTextField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      id='name'
      name='name'
      label='Name'
      variant='outlined'
      sx={{ minWidth, marginRight: 2 }}
    />
  );
}

export default BeatifulTextField;
