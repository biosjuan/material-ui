import { contactData } from '@/Data/ContactData';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  Typography,
  ListSubheader,
} from '@mui/material';

function ContactGrid() {
  return (
    <Grid container spacing={2} sx={{ width: 700 }}>
      {contactData.map((contact) => {
        return (
          <Grid item key={contact.name}>
            <Card>
              <CardHeader
                title={contact.name}
                subheader={contact.role}
                avatar={
                  <Avatar>{contact.name?.substring(0, 1) || 'A'} </Avatar>
                }
              />
              <CardContent>
                <Typography>
                  <strong>Start Date:</strong> {contact.startDate}
                </Typography>
                <Typography>
                  <strong>Work Preference:</strong> {contact.preference}
                </Typography>
                <List
                  subheader={
                    <ListSubheader
                      sx={{
                        right: 16,
                        position: 'inherit',
                        fontSize: '1.25em',
                        color: 'black',
                        paddingLeft: 0,
                      }}
                    >
                      Skills
                    </ListSubheader>
                  }
                  sx={{
                    listStyle: 'list-item',
                    listStyleType: 'circle',
                    paddingLeft: 2,
                  }}
                >
                  {contact.skills.map((skill) => {
                    return (
                      <li key={skill} style={{ paddingBottom: '2px' }}>
                        {skill}
                      </li>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ContactGrid;
