'use client';
import {
  Alert,
  AlertTitle,
  Autocomplete,
  AutocompleteInputChangeReason,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { FormValues, contactData } from '@/Data/ContactData';
import dayjs from 'dayjs';
import BeatifulTextField from './_formSubComponent/BeatifulTextField';
import BeatifulAutoComplete from './_formSubComponent/BeatifulAutoComplete';
import BeatifulSelect from './_formSubComponent/BeatifulSelect';
import BeatifulDesktopDatePicker from './_formSubComponent/BeatifulDesktopDatePicker';
import BeautifulRadios from './_formSubComponent/BeatifulRadios';

export const minWidth = 300;
export const defaultPreference = 'Work From Home';

function ContactForm() {
  const today = new Date();
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: '',
      skills: ['Angular'],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };
  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );

  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const handleTextFiledChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void) | undefined

  const handleAutoComplete = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    setFormValues({
      ...formValues,
      role: value || '',
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === 'string' ? value.split(', ') : value,
    });
  };

  const hanldeDayPickerChange = (value: string | null | undefined) => {
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };
    console.log(value);
    setFormValues({
      ...formValues,
      startDate: `${
        startDate.month() + 1
      }/${startDate.date()}/${startDate.year()}`,
    });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
  };

  const handleClearClick = () => {
    setFormValues({ ...getDefaultFormValues() });
    console.log(formValues);
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper>
        <form>
          <FormControl>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <BeatifulTextField
                value={formValues.name}
                onChange={handleTextFiledChange}
              />
              <BeatifulAutoComplete
                value={formValues.role || ''}
                onInputChange={handleAutoComplete}
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <BeatifulSelect
                onChange={handleSelectChange}
                value={formValues.skills || ''}
              />
              <BeatifulDesktopDatePicker
                value={dayjs(formValues.startDate)}
                onChange={hanldeDayPickerChange}
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <FormGroup sx={{ minWidth, marginRight: 2 }}>
                <BeautifulRadios
                  preference={formValues.preference}
                  handleRadioChange={handleRadioChange}
                />
              </FormGroup>
              <Stack>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleClearClick}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}

export default ContactForm;
