import TimeTable from './index.js';

function Medium() {
  return (
    <TimeTable>
      <header>
        <h3>Средняя группа</h3>
      </header>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <h3>ВТ</h3>
          <h4>17.00 - 18.30</h4>
          <p>
            Актёрское мастерство
            <br />
            Сценическая речь
            {/* <br />+ репетиции индивидуальных отрывков в дополнительное время */}
          </p>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <h3>СР</h3>
          <h4>16.30 - 17.30</h4>
          <p>Вокал</p>
          <h4>17.30 - 18.30</h4>
          <p>Хореография</p>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <h3>ЧТ</h3>
          <h4>17.00 - 18.30</h4>
          <p>
            Актёрское мастерство
            <br />
            Сценическая речь
            {/* <br />+ репетиции индивидуальных отрывков в дополнительное время */}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <h3>ПТ</h3>
          <h4>17.00 - 18.30</h4>
          <p>
            Актёрское мастерство
            <br />
            Сценическая речь
            {/* <br />+ репетиции индивидуальных отрывков в дополнительное время */}
          </p>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <h3>СБ</h3>
          <h4>11.00 - 12.00</h4>
          <p>Вокал</p>
          <h4>12.00 - 13.00</h4>
          <p>Хореография</p>
        </div>
      </div>
    </TimeTable>
  );
}

export default Medium;
