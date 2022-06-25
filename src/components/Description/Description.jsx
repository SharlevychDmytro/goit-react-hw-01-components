import PropTypes from 'prop-types';

export const Description = ({ user: { avatar, location, username, tag } }) => {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};

Description.propTypes = {
  user: PropTypes.object.isRequired,
};
