import PropTypes from 'prop-types';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};
