import PropTypes from 'prop-types';
import {
  Friends,
  Avatar,
  IsOfline,
  IsOnline,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friends>
      {isOnline ? <IsOnline></IsOnline> : <IsOfline></IsOfline>}
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friends>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};
