import PropTypes from 'prop-types';
import { Tr } from './TransactionHistoryItem.styled';

export const TransactionHistoryList = ({
  item: { type, amount, currency },
}) => {
  return (
    <Tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Tr>
  );
};

TransactionHistoryList.propTypes = {
  item: PropTypes.object.isRequired,
};
