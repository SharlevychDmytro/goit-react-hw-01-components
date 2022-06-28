import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import {
  Avatar,
  Tag,
  UserName,
  Location,
  StatsItem,
  StatsName,
  StatsValue,
} from 'components/Profile/Profile.styled';

export const Profile = ({
  user: { avatar, location, username, tag, stats },
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width="50%"
      my="40px"
      pt="20px"
      bg="backgroundSecondary"
      borderRadius="normal"
    >
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
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        bg="backgroundThird"
        borderTop="normal"
      >
        <StatsItem>
          <StatsName>Followers</StatsName>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsValue>{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsItem>
      </Box>
    </Box>
  );
};
Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
