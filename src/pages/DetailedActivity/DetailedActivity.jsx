import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useDocuments } from '../../hooks/useDocuments';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { timestamp } from '../../config/firebase';
import uniquid from 'uniquid';

function DetailedActivity() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { document, error } = useDocuments('activities', id);
  const { updateDocument, response } = useFirestore('activities');
  const [comment, setComment] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    //? add comments the activity with the users id

    const commentToAdd = {
      user: user.uid,
      displayName: user.displayName,
      photo: user.photoURL,
      comment,
      createdAt: timestamp.fromDate(new Date()),
      id: uniquid(),
    };

    updateDocument(id, {
      comments: [...document.comments, commentToAdd],
    });

    if (!response.error) {
      setComment('');
    }
  };

  if (error) {
    return <p>{error}</p>;
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
              <p>Contact Number: {document.contactNumber}</p>
              <p>Description: {document.description}</p>
            </div>
          </>
        )}
      </Typography>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Comment: </span>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </label>
        <button>Submit Comment</button>
      </form>
      <div>
        {document &&
          document.comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                border: '1px solid black',
                width: '50%',
                margin: '10px auto',
              }}
            >
              <p>{comment.displayName}</p>
              <p>{comment.comment}</p>
              <img src={comment.photo} alt="" />
              <p>{comment.createdAt.toDate().toLocaleString()}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DetailedActivity;
