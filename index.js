"use strict";

const title = document.createElement("h1");
title.setAttribute("class", "title");
title.innerHTML = "Virtual Keyboard";

const textarea = document.createElement("textarea");
textarea.setAttribute("class", "textarea");

const body = document.getElementById("root");
body.appendChild(title);
body.appendChild(textarea);
