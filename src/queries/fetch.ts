export const fetchBook = async () => {
  const response = await fetch("https://marcin-czaniecki.herokuapp.com/books");
  return response.json();
};
export const fetchCard = async () => {
  const response = await fetch("https://marcin-czaniecki.herokuapp.com/cards");
  return response.json();
};
