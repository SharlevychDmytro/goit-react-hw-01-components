import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
