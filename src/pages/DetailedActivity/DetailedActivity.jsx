import React from 'react';
import { useDocuments } from '../../hooks/useDocuments';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function DetailedActivity() {
  const { id } = useParams();
  const { document, error } = useDocuments('activities', id);

  if (error) {
    return <p>{error}</p>;
  }

  if (document) {
    console.log(document);
  }

  return (
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
              <p>Start Date : {document.startDate} </p>
              <p>Start Time : {document.startTime}</p>
              <p>Contact : {document.contact}</p>
              <p>Details : {document.details}</p>
              <p>Contact Number: {document.contactNmuber}</p>
              <p>Description: {document.description}</p>
            </div>
          </>
        )}
      </Typography>
    </div>
  );
}

export default DetailedActivity;
