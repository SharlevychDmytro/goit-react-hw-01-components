import { Description } from 'components/Description/Description';
import { Stats } from 'components/Stats/Stats';
import user from 'data/user.json';

export const Profile = () => {
  return (
    <div>
      <Description user={user} />
      <Stats stats={user.stats} />
    </div>
  );
};
