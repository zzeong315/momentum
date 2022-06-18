const quotes = [
  {
    quote: "Time does not change us. It just unfolds us.",
    author: "Max Frisch"
  },
  {
    quote: "Lord, grant that I may always desire more than I accomplish.",
    author: "Michelangelo"
  },
  {
    quote: "Quality is never an accident; it is always the result of intelligent effort.",
    author: "John Ruskin"
  },
  {
    quote: "Employ thy time well, if thou meanest to get leisure.",
    author: "Benjamin Franklin"
  },
  {
    quote: "It's only when the tide goes out that you discover who's been swimming naked.",
    author: "Warren Buffett"
  },
  {
    quote: "The world is full of suffering but it is also full of people overcoming it.",
    author: "Helen Keller"
  },
  {
    quote: "Riches cover a multitude of woes.",
    author: "Menander"
  },
  {
    quote: "The whole life of man is but a point of time; let us enjoy it.",
    author: "Plutarch"
  },
  {
    quote: "Early morning hath gold in its mouth.",
    author: "Benjamin Franklin"
  },
  {
    quote: "A single day is enough to make us a little larger.",
    author: "Paul Klee"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;