import PropTypes from 'prop-types';
import { ItemStats, Percentage } from './StatisticsItem.styled';
export const StatisticsItem = ({ stat }) => {
  return (
    <ItemStats>
      <span>{stat.label}</span>
      <Percentage>{stat.percentage}%</Percentage>
    </ItemStats>
  );
};

StatisticsItem.propTypes = {
  stat: PropTypes.object.isRequired,
};
