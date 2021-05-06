export const fetchBook = async () => {
  const response = await fetch("http://159.89.177.40/books");
  return response.json();
};
export const fetchCard = async () => {
  const response = await fetch("http://159.89.177.40/cards");
  return response.json();
};
export const fetchHero = async () => {
  const response = await fetch("http://159.89.177.40/hero");
  return response.json();
};
