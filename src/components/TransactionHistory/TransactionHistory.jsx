import PropTypes from 'prop-types';
import { TransactionHistoryList } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import { Table, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryList item={item} key={item.id} />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
