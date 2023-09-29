import {
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { minWidth } from '../ContactForm';

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

function BeatifulSelect(props: {
  value: string[] | '' | undefined;
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
}) {
  return (
    <Select
      {...props}
      id='skill-select'
      renderValue={(selected: string[]) => selected.join(', ')}
      sx={{ minWidth: minWidth, marginRight: 2 }}
      multiple
    >
      {skills.map((skillName) => {
        return (
          <MenuItem value={skillName} key={skillName}>
            <ListItemText primary={skillName} />
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default BeatifulSelect;
