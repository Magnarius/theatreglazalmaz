import TimeTable from './index.js';

function Young() {
  return (
    <TimeTable>
      <header>
        <h3>Младшая группа</h3>
      </header>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <h3>ВТ</h3>
          <h4>16.00 - 17.00</h4>
          <p>
            Актёрское мастерство
            <br />
            Ритмика
            <br />
            Художественное слово
          </p>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <h3>СР</h3>
          <h4>16.00 - 16.30</h4>
          <p>Вокал</p>
          <h4>16.30 - 17.00</h4>
          <p>Актёрское мастерство</p>
          <h4>17.00 - 17.30</h4>
          <p>Хореография</p>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <h3>ПТ</h3>
          <h4>16.00 - 17.00</h4>
          <p>
            Актёрское мастерство
            <br />
            Ритмика
            <br />
            Художественное слово
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <h3>СБ</h3>
          <h4>10.30 - 11.00</h4>
          <p>Вокал</p>
          <h4>11.00 - 11.30</h4>
          <p>Актёрское мастерство</p>
          <h4>11.30 - 12.00</h4>
          <p>Хореография</p>
        </div>
      </div>
    </TimeTable>
  );
}

export default Young;
