import React from "react";
import Card from "./components/Card";

function App() {
  const card1 = {
    title: "DORS 1200 Универсальный просмотровый детектор",
    text: "Универсальный просмотровый детектор DORS 1200 предназначен для комплексного визуального контроля подлинности банкнот различных валют и другой защищенной полиграфической продукции.",
    href: "#0",
    btnText: "Купить",
  };
  const card2 = {
    title:
      "Cassida 5550 UV Счетчик банкнот эконом-класса с задней загрузкой банкнот",
    text: "Счетчик банкнот Cassida 5550 UV — компактный и надежный счетчик для сферы ритейла.",
    href: "#0",
    btnText: "Узнать больше",
  };
  return (
    <React.Fragment>
      <Card {...card1}>
        <img
          src="https://netology-code.github.io/mq-homeworks/mobile-graphic/product-cards/img/dors-1200.jpg"
          alt="Превью товара"
        />
      </Card>

      <Card {...card2} />
    </React.Fragment>
  );
}

export default App;
