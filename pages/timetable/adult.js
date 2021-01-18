import TimeTable from './index.js';

function Adult() {
  return (
    <TimeTable>
      <header>
        <h3>Взрослая группа</h3>
      </header>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <h3>СР</h3>
          <h4>19.30 - 21.00</h4>
          <p>
            Актёрское мастерство
            <br />
            Сценическая речь
          </p>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <h3>ВС</h3>
          <h4>17.30 - 20.00</h4>
          <p>
            Актёрское мастерство
            <br />
            Сценическая речь
          </p>
        </div>
      </div>
    </TimeTable>
  );
}

export default Adult;
