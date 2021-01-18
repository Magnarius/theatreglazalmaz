import Layout from '../../components/Layout.js';
import ActiveLink from '../../components/ActiveLink.js';

const groups = [
  {
    url: '/timetable/young#timetable',
    label: 'Младшая',
  },
  {
    url: '/timetable/medium#timetable',
    label: 'Средняя',
  },
  {
    url: '/timetable/high#timetable',
    label: 'Старшая',
  },
  {
    url: '/timetable/adult#timetable',
    label: 'Взрослая',
  },
];

function TimeTable({ children }) {
  return (
    <Layout title="Расписание">
      <h2 id="timetable">Расписание занятий</h2>
      <ul className="actions">
        {groups.map(({ url, label }) => (
          <li>
            <ActiveLink href={url} activeClassName="alt" key={label}>
              <a className="button">{label}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
      {children}
    </Layout>
  );
}

export default TimeTable;
