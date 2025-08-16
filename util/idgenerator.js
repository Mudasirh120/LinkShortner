const selection = ["number", "capital", "small"];
const characters = {
  small: "abcdefghijklmnopqrstuvwxyz",
  capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
};
export const generateId = () => {
  let length = 0;
  let id = "";
  while (length < 6) {
    const opt = Math.floor(Math.random() * selection.length);
    const selOpt = characters[selection[opt]];
    length += 1;
    id += getRandomChar(selOpt);
  }
  return id;
};

function getRandomChar(str) {
  const index = Math.floor(Math.random() * str.length);
  return str.charAt(index);
}
