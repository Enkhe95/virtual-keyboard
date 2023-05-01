"use strict";

const title = document.createElement("h1");
title.setAttribute("class", "title");
title.innerHTML = "Virtual Keyboard";

const textarea = document.createElement("textarea");
textarea.setAttribute("class", "textarea");

const body = document.getElementById("root");
body.appendChild(title);
body.appendChild(textarea);

function addInerText(event) {
  textarea.value += event.target.innerText;
}

function onBackSpace() {
  textarea.value = textarea.value.slice(0, -1);
}

const keyboard = [
  [
    { value: "`" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "0" },
    { value: "-" },
    { value: "=" },
    { value: "Backspace", class: "l-btn", onClick: onBackSpace },
  ],
  [
    { value: "Tab" },
    { value: "q" },
    { value: "w" },
    { value: "e" },
    { value: "r" },
    { value: "t" },
    { value: "y" },
    { value: "u" },
    { value: "i" },
    { value: "o" },
    { value: "p" },
    { value: "[" },
    { value: "]" },
    { value: "|" },
    { value: "Del" },
  ],
  [
    { value: "CapsLock" },
    { value: "a" },
    { value: "s" },
    { value: "d" },
    { value: "f" },
    { value: "g" },
    { value: "h" },
    { value: "j" },
    { value: "k" },
    { value: "l" },
    { value: ";" },
    { value: "'" },
    { value: "Enter" },
  ],
  [
    { value: "Shift" },
    { value: "z" },
    { value: "x" },
    { value: "c" },
    { value: "v" },
    { value: "b" },
    { value: "n" },
    { value: "m" },
    { value: "," },
    { value: "." },
    { value: "/" },
    { value: "▲" },
    { value: "Shift" },
  ],
  [
    { value: "Сtrl" },
    { value: "Win" },
    { value: "Alt" },
    { value: " " },
    { value: "Alt" },
    { value: "◄" },
    { value: "▼" },
    { value: "►" },
    { value: "Ctrl" },
  ],
];

for (let i = 0; i < keyboard.length; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "box-row");
  for (let g = 0; g < keyboard[i].length; g++) {
    const button = document.createElement("button");
    button.setAttribute("class", "btn");
    if (keyboard[i][g].class !== undefined) {
      button.setAttribute("class", `btn ${keyboard[i][g].class}`);
    }
    button.innerText = keyboard[i][g].value;
    button.addEventListener("click", keyboard[i][g].onClick ?? addInerText);
    row.appendChild(button);
  }
  body.appendChild(row);
}

const tabButton = document.querySelectorAll("button");
tabButton.forEach((button) => {
  if (button.innerText === "Tab") {
    button.setAttribute("id", "btn-tab");
  }
});
