'use client';
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
  Box,
  Button,
  Collapse,
} from '@mui/material';
import { useState } from 'react';

const contactLIHeight = 24;
let maxSkills = 1;

function ContactGrid() {
  const [open, setOpen] = useState(true);
  contactData.map((contact) => {
    maxSkills =
      (contact.skills?.length || 0) > maxSkills
        ? contact.skills?.length || 0
        : maxSkills;
  });
  return (
    <Box m={1}>
      <Button
        sx={{ marginBotton: 3 }}
        variant='contained'
        onClick={() => setOpen(!open)}
      >
        Collapse
      </Button>
      <Grid container spacing={2} sx={{ width: 700 }}>
        {contactData.map((contact) => {
          return (
            <Grid item key={contact.name}>
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar sx={{ backgroundColor: 'primary.main' }}>
                      {contact.name?.substring(0, 1) || 'A'}{' '}
                    </Avatar>
                  }
                  sx={{
                    borderBottom: '1px solid',
                    borderBottomColor: 'primary.main',
                  }}
                />
                {/* <Collapse in={open} timeout={2000} orientation='horizontal'> */}
                <Collapse in={open} timeout={1000}>
                  <CardContent
                    sx={{ height: 130 + maxSkills * contactLIHeight }}
                  >
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
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ContactGrid;
