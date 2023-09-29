import {
  Autocomplete,
  AutocompleteInputChangeReason,
  TextField,
} from '@mui/material';
import { minWidth } from '../ContactForm';

const roles = [
  'Software Dev',
  'Architect',
  'DevOps Engineer',
  'Manager',
  'QA Engineer',
];

function BeatifulAutoComplete(props: {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void;
}) {
  return (
    <Autocomplete
      {...props}
      options={roles}
      renderInput={(params) => {
        return <TextField name='role' {...params} />;
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      sx={{ minWidth }}
      isOptionEqualToValue={(option, value) => option === value || value === ''}
    />
  );
}

export default BeatifulAutoComplete;
