const quotes = [
  {
    quote:
      "네 길을 여호와께 맡기라 그를 의지하면 그가 이루시고 네의를 빛같이 나타내시며 네 공의를 정오의 빛같이 하시리로다",
    author: "시편37편 5~6절",
  },
  {
    quote: "예수께서 이르시되 믿는 자에게는 능치 못할 일이 없으니라 하시니",
    author: "마가복음 9장 21절",
  },
  {
    quote: "의에 주리고 목마른 자는 복이 있나니 저희가 배부를 것임이요",
    author: "마태복음 5:6",
  },
  {
    quote: "나는 길이요 진리요 생명이니",
    author: "요한복은 14장 3절",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
