/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable strict */
/* eslint-disable linebreak-style */
// eslint-disable-next-line strict
// eslint-disable-next-line lines-around-directive
/* eslint-plugin-disable */

"use strict";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=calabar&appid=a99d8cdedadf296a8f570e38a1bf8bb2"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("app").innerHTML = `<p>${data.name}</p>`;
  });
