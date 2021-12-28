import PropTypes from 'prop-types';
import { Row, Type, Currency } from './Transaction.styled';

export default function TransactionHistoryTableRow({
  item: { type, amount, currency },
}) {
  return (
    <Row>
      <Type>{type}</Type>
      <td>{amount}</td>
      <Currency>{currency}</Currency>
    </Row>
  );
}

TransactionHistoryTableRow.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
