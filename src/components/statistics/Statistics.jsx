import PropTypes from 'prop-types'
import StatisticsItem from './StatisticsItem'

export default function Statistics(data) {
  const { title, stats } = data;
 
  return <section className="statistics">
    {title && (<h2>{title}</h2>)}
    <ul className="stat-list">
        {stats.map(stat => (<StatisticsItem key={stat.id} stat={stat}/>))}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
}