import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { StatsItem, StatsName, StatsValue } from './Stats.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
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
        <StatsValue>{followers}</StatsValue>
      </StatsItem>
      <StatsItem>
        <StatsName>Views</StatsName>
        <StatsValue>{views}</StatsValue>
      </StatsItem>
      <StatsItem>
        <StatsName>Likes</StatsName>
        <StatsValue>{likes}</StatsValue>
      </StatsItem>
    </Box>
  );
};

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};
