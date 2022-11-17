import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';

const CreatActivity = ({ uid }) => {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore('activities');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const activity = {
      uid,
      title,
      location,
      date,
      time,
      contact,
      contactNumber,
      description,
      comments,
    };

    await addDocument(activity);

    if (!response.error) {
      setTitle('');
      setLocation('');
      setDate('');
      setTime('');
      setContact('');
      setContactNumber('');
      setDescription('');
      setComments([]);
      navigate('/activities');
    }
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
