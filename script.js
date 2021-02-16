const body = document.querySelector("body");
let code = [];
const secret = "konami";

body.addEventListener("keyup", myFunction);

function myFunction(e) {
  code.push(e.key);
  let someString = code.join("");
  someString.slice(-secret.length).toLowerCase() === secret ? cornify_add() : 0;
}
