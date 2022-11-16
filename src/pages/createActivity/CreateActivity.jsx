import { useState } from 'react';
import useActivities from '../../hooks/useActivities';

const CreatActivity = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);

  const { createActivity, error, isPending } = useActivities();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(location);
    // console.log(date);
    // console.log(time);
    // console.log(contact);
    // console.log(contactNumber);
    // console.log(description);
    // console.log(comments);

    const activity = {
      title,
      location,
      date,
      time,
      contact,
      contactNumber,
      description,
      comments,
    };

    createActivity(activity);
  };
  return (
    <div>
      <h1>Create Activity</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name of Activity:</span>
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>
          <span>Location:</span>
        </label>
        <textarea
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        ></textarea>
        <label>
          <span>Date:</span>
        </label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label>
          <span>Time:</span>
          <input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </label>
        <label>
          <span>Contact name:</span>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={contact}
        />
        <label>
          <span>Contact Number:</span>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setContactNumber(e.target.value);
          }}
          value={contactNumber}
        />
        <label>
          <span>Description:</span>
          <textarea
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></textarea>
        </label>
        <button> Share</button>
      </form>
    </div>
  );
};

export default CreatActivity;
