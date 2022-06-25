import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li key={id}>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};
