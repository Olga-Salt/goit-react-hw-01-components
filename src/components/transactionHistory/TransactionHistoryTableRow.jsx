import PropTypes from 'prop-types';

export default function TransactionHistoryTableRow({
  item: { type, amount, currency },
}) {
  console.log(type, amount, currency);
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

// TransactionHistoryTableRow.propTypes = {
//     item: PropTypes.object.isRequired
// }

TransactionHistoryTableRow.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
