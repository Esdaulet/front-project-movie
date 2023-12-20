import "./Pricing.css";

function App() {
  return (
    <div className="wrapper">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="card">
      <div className="card_body">
        <div className="card_header">
          <h5 className="card_title">Базовый</h5>
          <h2 className="card_price">
            $0<span className="period">/месяц</span>
          </h2>
        </div>
        <hr></hr>
        <div className="card_description">
          <ul>
            <li className="list_checked">Ограниченный доступ</li>
            <li className="list_checked">Основные функции</li>
            <li className="list_checked">Общий доступ к сообществу</li>
            <li className="text-muted">Реклама</li>
          </ul>
        </div>
        <div className="card_footer">
          <button className="card_btn">Начать</button>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card">
      <div className="card_body">
        <div className="card_header">
          <h5 className="card_title">Премиум</h5>
          <h2 className="card_price">
            $9<span className="period">/месяц</span>
          </h2>
        </div>
        <hr></hr>
        <div className="card_description">
          <ul>
            <li className="list_checked">Полный доступ</li>
            <li className="list_checked">HD-качество</li>
            <li className="list_checked">Неограниченный стриминг</li>
            <li className="list_checked">Без рекламы</li>
          </ul>
        </div>
        <div className="card_footer">
          <button className="card_btn">Подписаться сейчас</button>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="card">
      <div className="card_body">
        <div className="card_header">
          <h5 className="card_title">Премиум+</h5>
          <h2 className="card_price">
            $49<span className="period">/месяц</span>
          </h2>
        </div>
        <hr></hr>
        <div className="card_description">
          <ul>
            <li className="list_checked">VIP-доступ</li>
            <li className="list_checked">4K-качество</li>
            <li className="list_checked">Загрузки для просмотра офлайн</li>
            <li className="list_checked">Эксклюзивный контент</li>
          </ul>
        </div>
        <div className="card_footer">
          <button className="card_btn">Выбрать Премиум+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
