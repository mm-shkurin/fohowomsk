import React, { useState } from 'react';
import './YourMenuStyles.css';

const YourMenuComponent = () => {
  const [isProductSubMenuOpen, setProductSubMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav>
      <button className={`burger-button ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`topmenu ${isBurgerMenuOpen ? 'burger-open' : ''}`}>
        <li><a href="/home" className={`active ${isProductSubMenuOpen ? 'arrow-up' : 'arrow-down'}`} onClick={() => setProductSubMenuOpen(!isProductSubMenuOpen)}>О нас</a>
          <ul className={`submenu ${isProductSubMenuOpen ? 'submenu-open' : ''}`}>
            <li><a href="/manag" className="submenu-link">Руководство</a></li>
          </ul>
        </li>
        <li><a href="/company">о компании</a></li>
        <li>
          <a href="/home" className={`active ${isProductSubMenuOpen ? 'arrow-up' : 'arrow-down'}`} onClick={() => setProductSubMenuOpen(!isProductSubMenuOpen)}>
            Продукция
          </a>
          <ul className={`submenu ${isProductSubMenuOpen ? 'submenu-open' : ''}`}>
            <li><a href="/burg" className={`active ${isProductSubMenuOpen ? 'arrow-up' : 'arrow-down'}`} onClick={() => setProductSubMenuOpen(!isProductSubMenuOpen)}>Оздоровительное питание</a>
              <ul className={`submenu ${isProductSubMenuOpen ? 'submenu-open' : ''}`}>
                <li><a href="/regulation">Регуляция</a></li>
                <li><a href="/cleaning">Очистка</a></li>
                <li><a href="/recovery">Восстановление</a></li>
              </ul>
            </li>
            <li><a href="/cosmetology">Косметология</a></li>
            <li><a href="/hygiene_care">Гигиена и уход</a></li>
            <li><a href="/equipment">Приборы и оборудование</a></li>
            <li><a href="/texstil">Функциональный текстиль</a></li>
          </ul>
        </li>
        <li><a href="">Результаты</a></li>
        <li><a href="">Новости</a></li>
        <li><a href="/contact">Контакты</a></li>
      </ul>
    </nav>
  );
};

export default YourMenuComponent;