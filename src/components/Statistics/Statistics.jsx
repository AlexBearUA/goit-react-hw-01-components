import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.statItem}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
