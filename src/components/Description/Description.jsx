import { Box } from 'components/Box/Box';
import {
  Avatar,
  Tag,
  UserName,
  Location,
} from 'components/Description/Description.styled';
import PropTypes from 'prop-types';

export const Description = ({ user: { avatar, location, username, tag } }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      mb="20px"
    >
      <Avatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Box>
  );
};

Description.propTypes = {
  user: PropTypes.object.isRequired,
};
