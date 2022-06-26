import { Box } from 'components/Box/Box';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Box as="ul" mb="40px" width="50%">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
