'use client';
import {
  Alert,
  AlertTitle,
  Autocomplete,
  AutocompleteInputChangeReason,
  Button,
  Checkbox,
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

import { useTheme } from '@mui/material/styles';
import { StyledFormGroup } from './_formSubComponent/StyledFormGroup';

export const minWidth = 300;
export const defaultPreference = 'Work From Home';

const skills = [
  'React',
  'Angular',
  'Python',
  'NodeJS',
  'Machine Learning',
  'UI/UX Design',
  'Illustrator',
  'Manual Testing',
  'Test Automation',
  'Docker',
  'Jenkins',
  'Leadership',
  'Project Management',
];

const paperInputStyle = {
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
    '&:hover': {
      '& > fieldset': { borderColor: 'primary.light' },
    },
  },
  '& .MuiFormLabel-root': {
    color: 'primary.dark',
  },
};

function ContactForm() {
  const theme = useTheme();
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
      <Paper
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' },
          backgroundColor: 'grid.main',
          // '& button.MuiButton-text': { backgroundColor: 'primary.light' },
        }}
      >
        <form>
          <StyledFormGroup row paddingtop={10}>
            <BeatifulTextField
              value={formValues.name}
              onChange={handleTextFiledChange}
            />
            <BeatifulAutoComplete
              value={formValues.role || ''}
              onInputChange={handleAutoComplete}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <BeatifulSelect
              onChange={handleSelectChange}
              value={formValues.skills || ''}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <Checkbox
                      checked={formValues.skills?.includes(skillName)}
                    />
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </BeatifulSelect>
            <BeatifulDesktopDatePicker
              value={dayjs(formValues.startDate)}
              onChange={hanldeDayPickerChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <FormGroup sx={{ minWidth, marginRight: 2 }}>
              <BeautifulRadios
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
              />
            </FormGroup>
            <Stack
              direction='column'
              justifyContent='space-around'
              alignItems='flex-end'
              sx={{ minWidth: minWidth }}
            >
              <Button
                variant='contained'
                sx={{ height: 56, width: 100 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                variant='beautiful'
                sx={{ height: 56, width: 100 }}
                onClick={handleClearClick}
              >
                Clear
              </Button>
            </Stack>
          </StyledFormGroup>
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
