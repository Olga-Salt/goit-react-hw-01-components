import PropTypes from 'prop-types';
import { TransactionTable, TransactionHead } from './Transaction.styled';

import TransactionHistoryTableRow from './TransactionHistoryTableRow';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryTableRow key={item.id} item={item} />
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
