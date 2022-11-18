const Avatar = ({ user }) => {
  return (
    <div className="avatar">
      <h2>Signed in: {user.displayName}</h2>
    </div>
  );
};

export default Avatar;
