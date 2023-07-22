export default function keysPress(e) {
  const listKeys = ['%', '1', '2', '3', '*', '4', '5', '6', '-', '7', '8', '9', '+', '0'];
  if (e.key === 'Enter') return '=';
  if (e.key === 'Escape') return 'AC';
  if (e.key === 'Backspace') return 'Backspace';
  if (e.key === '*') return 'x';
  return listKeys.find((value) => value === e.key);
}
