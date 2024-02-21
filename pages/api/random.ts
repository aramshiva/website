// pages/api/random-cowsay-quote.js
import cowsay from 'cowsay';
import getRandomQuote from 'random-quotes';

export default function handler(req, res) {
  // Get a random quote
  const { body: quote } = getRandomQuote();

  // Generate the cowsay message
  const cowSayMessage = cowsay.say({
    text: quote,
    e: "oo", // Eyes of the cow
    T: "U ", // Tongue of the cow
  });

  // Return the cowsay message
  res.status(200).send(cowSayMessage);
}
