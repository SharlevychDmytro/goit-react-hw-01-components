import { Box } from 'components/Box/Box';
import { Description } from 'components/Description/Description';
import { Stats } from 'components/Stats/Stats';
import user from 'data/user.json';

export const Profile = () => {
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
      <Description user={user} />
      <Stats stats={user.stats} />
    </Box>
  );
};
