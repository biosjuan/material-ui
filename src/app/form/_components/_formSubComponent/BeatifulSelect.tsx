import { Select, SelectChangeEvent } from '@mui/material';
import { minWidth } from '../ContactForm';
import { ReactNode, useEffect, useRef, useState } from 'react';

function BeatifulSelect(props: {
  value: string[] | '' | undefined;
  children: ReactNode[];
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
}) {
  const selectInputComponent = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, [selectInputComponent]);
  return (
    <Select
      ref={selectInputComponent}
      {...props}
      id='skill-select'
      renderValue={(selected: string[]) => selected.join(', ')}
      sx={{ minWidth: minWidth, marginRight: 2 }}
      multiple
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position}px !important`,
            maxHeight: 200,
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
}

export default BeatifulSelect;
