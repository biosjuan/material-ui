import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { minWidth } from '../ContactForm';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

function BeatifulDesktopDatePicker(props: {
  value: string | undefined;
  onChange: (value: string | null | undefined) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label='Date'
        format='MM/DD/YYYY'
        slots={{
          textField: (params) => <TextField {...params} sx={{ minWidth }} />,
        }}
      />
    </LocalizationProvider>
  );
}

export default BeatifulDesktopDatePicker;
