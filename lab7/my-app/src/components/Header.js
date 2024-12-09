import React from "react";
//import "./Header.css"; // Якщо потрібен окремий CSS для Header

function Header({ headerActive, toggleHeaderColor, isFirstClick }) {
  return (
    <header>
      <h2
        onClick={toggleHeaderColor}
        className={
          isFirstClick
            ? headerActive
              ? "active-header"
              : "active-header2"
            : "neutral-header"
        }
      >
        Дворецька Анастасія Вадимівна
      </h2>
      <p
        onClick={toggleHeaderColor}
        className={
          isFirstClick
            ? headerActive
              ? "active-header2"
              : "active-header"
            : "neutral-header"
        }
      >
        <b>Місце народження:</b> 16.05.2005 м. Дніпро
      </p>
      <p>
        <b>Освіта:</b>
      </p>
      <ul>
        <li>НВК №111, м. Дніпро</li>
        <li>НТУУ "КПІ", м. Київ</li>
      </ul>

      <div>
            <b>Хобі:</b>
            <ul>
                <li>Прогулянки з друзями</li>
                <li>Читання</li>
                <li>Плетення з бісеру</li>
                <li>Спорт</li>
            </ul>
        </div>

        <div>
            <b>Улюблені книги:</b>
            <ol>
                <li>"Тривожні люди"</li>
                <li>"Мартін Іден"</li>
                <li>"Чоловік на ім'я Уве"</li>
            </ol>
            <p><b>Оде́са</b> — місто в Україні. Третє за кількістю мешканців місто країни після Києва та Харкова. Розташоване на узбережжі Чорного моря. Найбільший морський торговий порт держави. Культурно-освітній, туристичний, торговий, транспортний центр. Складова Одеської міської територіальної громади. Населення — 1 010 537 осіб. Основа економіки — транспортні перевезення, машинобудівна, хімічна, нафтопереробна, харчова та легка промисловості. Працюють 37 закладів вищої освіти, шість театрів, вісім кінотеатрів, філармонія, цирк, музеї, галереї тощо.</p>

        </div>
    </header>
  );
}

export default Header;

