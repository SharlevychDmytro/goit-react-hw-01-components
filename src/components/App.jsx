import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import user from 'data/user.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Box } from './Box/Box';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      bg="background"
    >
      <Profile
        avatar={user.avatar}
        location={user.location}
        username={user.username}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics stats={data} title="UPLOAD STATS" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
