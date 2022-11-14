import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

//? Styles
import './signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicError, setProfilePicError] = useState(null);
  const { signup, isPending, error } = useSignup();

  //*  Verifies the profile picture is an image and size
  const handleProfilePic = (e) => {
    setProfilePic(null);
    let thumbnail = e.target.files[0];

    if (!thumbnail) {
      setProfilePicError(
        'Please select a file, An image file must be selected'
      );
      return;
    }
    if (!thumbnail.type.includes('image')) {
      setProfilePicError(
        'Please select an image file, file chosen is not an image'
      );
      return;
    }
    console.log(thumbnail.type);
    if (thumbnail.size > 1000000) {
      setProfilePicError('Please select an image file less than 1MB');
      return;
    }
    setProfilePicError(null);
    setProfilePic(thumbnail);
  };

  //*  Verifies the password and confirm password match
  //*  Submits the form to create the user
  //todo check the password has certain characters and length
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    console.log(email, password, displayName, profilePic);
    signup(email, password, displayName, profilePic);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Confirm password:</span>
          <input
            required
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        <label>
          <span>display Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Profile Pic:</span>
          <input type="file" required onChange={handleProfilePic} />
          {profilePicError && <div>{profilePic}</div>}
        </label>
        {!isPending && <button>sign up</button>}
        {isPending && <button disabled>Signing up...</button>}
        {profilePicError && <div>{profilePicError}</div>}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
