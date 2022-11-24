import React from 'react';
import { useDocuments } from '../../hooks/useDocuments';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardContent, Container, Box, Card, Button, Grid } from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { timestamp } from '../../config/firebase';
import { format } from 'date-fns';
import uniqid from 'uniqid';

function DetailedActivity() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { document, error } = useDocuments('activities', id);
  const { document: userDocument } = useDocuments('users', user.uid);
  const { updateDocument } = useFirestore('users');

  console.log(document);
  console.log(userDocument);
  const activityToupdate = {
    activity: id,
    title: document && document.title,
    id: uniqid(),
    dateAdded: timestamp.fromDate(new Date()),
  };

  const handleClick = () => {
    if (
      !userDocument.activities.some((userAct) => {
        //todo toast notification here
        console.log('Activity Already Added to your list');
        return userAct.activity === id;
      })
    ) {
      //? if the activity is not in the users saved activities then add it
      //todo toast notification here
      console.log('Activity Added to your list');
      updateDocument(user.uid, {
        activities: [...userDocument.activities, activityToupdate],
      });
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={2}>
        <div className="detailed-containter">
          <Typography varient="h3" component="h1" align="center" gutterBottom>
            Detailed Activity Information
          </Typography>
          <Typography varient="h4" component="h2" aling="center" gutterBottom>
            {document && (
              <>
                <div>
                  <p>Title : {document.title}</p>
                  <p>Location : {document.location}</p>
                  <Box
                    sx={{
                      width: '285px',
                      height: '150px',
                      borderRadius: '6.7px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow:
                        '0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)',
                      my: 1.5,
                    }}
                  >
                    <Card
                      sx={{
                        border: '1.3px solid #030109',
                        height: '100%',
                        width: '100%',
                        borderRadius: '6.7px',
                        paddingLeft: '38px',
                        bgcolor: '#f6f6f6',
                      }}
                    >
                      <Container component="main" maxWidth="xs">
                        <CardContent sx={{ pt: 0, width: '200px' }}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                            sx={{ mb: 0 }}
                          >
                            <p>Start Date :{document.date}</p>
                            <p>Start Time : {document.time}</p>
                          </Typography>
                        </CardContent>
                      </Container>
                    </Card>
                  </Box>
                  <p>Description: {document.description}</p>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation={true}
                    sx={{
                      mt: 2,
                      mb: 2,
                      width: 140,
                      backgroundColor: '#625b71',
                      '&:hover': {
                        backgroundColor: '#988fad',
                      },
                    }}
                  >
                    View Map
                    <MapOutlinedIcon
                      sx={{ bgcolor: '#ffab3d', width: 18, height: 18 }}
                    ></MapOutlinedIcon>
                  </Button>
                  <Typography
                    varient="h3"
                    component="h1"
                    align="center"
                    gutterBottom
                  >
                    Admin
                  </Typography>
                  <Box
                    sx={{
                      width: '285px',
                      height: '150px',
                      borderRadius: '6.7px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow:
                        '0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)',
                      my: 1.5,
                    }}
                  >
                    <Card
                      sx={{
                        border: '1.3px solid #030109',
                        height: '100%',
                        width: '100%',
                        borderRadius: '6.7px',
                        paddingLeft: '38px',
                        bgcolor: '#f6f6f6',
                      }}
                    >
                      <Container component="main" maxWidth="xs">
                        {/* <CardContent sx={{ pt: 0, width: "200px" }}> */}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                          sx={{ mb: 0 }}
                        >
                          <p>Contact : {document.contact}</p>
                          <p>Details : {document.details}</p>
                          <p>Contact Number: {document.contactNmuber}</p>
                        </Typography>
                        <Button
                          type="submit"
                          variant="contained"
                          disableElevation={true}
                          sx={{
                            mt: 2,
                            mb: 2,
                            width: 140,
                            backgroundColor: '#625b71',
                            '&:hover': {
                              backgroundColor: '#988fad',
                            },
                          }}
                        >
                          Message
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          disableElevation={true}
                          sx={{
                            mt: 2,
                            mb: 2,
                            width: 140,
                            backgroundColor: '#625b71',
                            '&:hover': {
                              backgroundColor: '#988fad',
                            },
                          }}
                          onClick={() => handleClick()}
                        >
                          interested
                        </Button>
                        {/* </CardContent> */}
                      </Container>
                    </Card>
                  </Box>
                </div>
              </>
            )}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default DetailedActivity;
