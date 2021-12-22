import PropTypes from 'prop-types'

export default function StatisticsItem({ stat: { label, percentage }}) {
  
    return <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}