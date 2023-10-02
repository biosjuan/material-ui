import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { minWidth } from '../ContactForm';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { CalendarToday } from '@mui/icons-material';

const properSX = {
  '& .MuiPaper-root': { color: 'yellow' },
  '& [role=grid]': {
    backgroundColor: 'green',
    '& button': { backgroundColor: 'red' },
  },
};

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
        views={['day']}
        slots={{
          textField: (params) => <TextField {...params} sx={{ minWidth }} />,
          openPickerIcon: CalendarToday,
        }}
        slotProps={{
          openPickerButton: { color: 'primary' },
          popper: { sx: properSX },
        }}
      />
    </LocalizationProvider>
  );
}

export default BeatifulDesktopDatePicker;
