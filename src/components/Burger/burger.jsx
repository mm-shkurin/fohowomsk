import React, { useState } from 'react';
import './YourMenuStyles.css';

const YourMenuComponent = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
        setOpenSubMenus({}); // Close all submenus when burger menu is toggled
    };

    const handleSubMenuToggle = (menu) => {
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <nav>
            <button className={`burger-button ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            <ul className={`topmenu ${isBurgerMenuOpen ? 'burger-open' : ''}`}>
                <li className={openSubMenus['about'] ? 'submenu-open' : ''}>
                    <a href="/home" onClick={(e) => { e.preventDefault(); handleSubMenuToggle('about'); }} className={`active ${openSubMenus['about'] ? 'arrow-up' : 'arrow-down'}`}>
                        О нас
                    </a>
                    <ul className={`submenu ${openSubMenus['about'] ? 'submenu-open' : ''}`}>
                        <li><a href="/manag" className="submenu-link">Руководство</a></li>
                    </ul>
                </li>
                <li><a href="/company">о компании</a></li>
                <li className={openSubMenus['products'] ? 'submenu-open' : ''}>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSubMenuToggle('products'); }} className={`active ${openSubMenus['products'] ? 'arrow-up' : 'arrow-down'}`}>
                        Продукция
                    </a>
                    <ul className={`submenu ${openSubMenus['products'] ? 'submenu-open' : ''}`}>
                        <li className={`submenu-item ${openSubMenus['products'] && openSubMenus['health'] ? 'submenu-open' : ''}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSubMenuToggle('health'); }} className={`active ${openSubMenus['health'] ? 'arrow-up' : 'arrow-down'}`}>
                                Оздоровительное питание
                            </a>
                            <ul className={`submenu ${openSubMenus['health'] ? 'submenu-open' : ''}`}>
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
                <li><a href="#">Результаты</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default YourMenuComponent;