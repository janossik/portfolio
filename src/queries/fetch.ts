export const fetchBook = async () => {
  const response = await fetch("https://marcincz.pl/books");
  return response.json();
};
export const fetchCard = async () => {
  const response = await fetch("https://marcincz.pl/cards");
  return response.json();
};
export const fetchHero = async () => {
  const response = await fetch("https://marcincz.pl/hero");
  return response.json();
};
