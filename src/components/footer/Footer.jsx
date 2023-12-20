import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Условия использования</li>
              <li>Политика конфиденциальности</li>
              <li>Блог</li>
              <li>Часто задаваемые вопросы</li>
              <li>Список для просмотра</li>
            </ul>
            <p>
              © 2023 MOVIEAPP. Все права защищены. Все видео и шоу на этой
              платформе являются товарными знаками MOVIEAPP. Дублирование и
              копирование строго запрещено. Все права защищены.
            </p>
          </div>
          <div className="box">
            <h3>Подписывайтесь на нас</h3>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="box">
            <h3>.MOVIEAPP </h3>
            <div className="img flexSB">
              <img
                src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
                alt="App Store"
              />
              <span>App Store</span>
              <img
                src="https://img.icons8.com/fluency/48/000000/google-play.png"
                alt="Google Play Store"
              />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
