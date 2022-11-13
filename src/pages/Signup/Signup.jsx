import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signup(email, password, displayName);
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
          <input
            // required
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </label>
        <button>sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
