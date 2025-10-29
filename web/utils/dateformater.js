export default function dateFormatter(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // months are 0-based
  const day = date.getDate();

  return `${month} сарын ${day}, ${year}`;
}
