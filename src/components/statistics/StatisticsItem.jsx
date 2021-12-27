import PropTypes from 'prop-types';
import getRandomHexColor from 'helpers/GetPandomColor';

export default function StatisticsItem({ stat: { label, percentage } }) {
  return (
    <li className="item" style={{ backgroundColor: getRandomHexColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
