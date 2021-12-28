import PropTypes from 'prop-types';
import { FaBookReader } from 'react-icons/fa';

import StatisticsItem from './StatisticsItem';
import styles from 'components/statistics/Statistics.module.css';

export default function Statistics(data) {
  const { title, stats } = data;

  return (
    <section className={styles.statistics}>
      {title && (
        <h2 className={styles.title}>
          {title.toUpperCase()} <FaBookReader />
        </h2>
      )}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
