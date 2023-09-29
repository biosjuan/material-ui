import { contactData } from '@/Data/ContactData';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function ContactTable() {
  const rows = () => [...contactData];
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows().map((contact) => {
            return (
              <TableRow key={contact.id}>
                {Object.entries(contact).map(([key, value]) => {
                  if (key === 'skills') {
                    return (
                      <TableCell key={contact.id + key}>
                        {value.join(', ')}
                      </TableCell>
                    );
                  }
                  if (key !== 'id') {
                    return (
                      <TableCell key={contact.id + key}>{value}</TableCell>
                    );
                  }

                  return '';
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactTable;
