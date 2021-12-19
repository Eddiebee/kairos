"use strict";
import config from "../config";

const myKey = config.MY_KEY,
  city = "calabar";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
// console.log(url);
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // document.getElementById("app").innerHTML = `<p>${data.name}</p>`;
  });

const components = {
  body: document.querySelector("body"),
  app: document.getElementById("app"),
  navBar: document.createElement("nav"),
};

const { body, app, navBar } = components;

const timer = setInterval(() => {
  let date = new Date();
  document.getElementById("time").innerHTML = `<p class="fw-bold fs-4">${date
    .toTimeString()
    .substring(0, 8)}</p>`;
}, 1000);

navBar.innerHTML = `<nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid d-flex .justify-content-lg-between">
    <div>
      <a class="secondary brand fs-1">Kairos</a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list secondary" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </div>
  </div>
</nav>

<section class="cnt">
  <div class="container">
    <div class="time pt-5" id="time">
    </div>
    <div>
      <p class="city" id="city">Calabar</p>
    </div>

    <div>
      <span class="fw-bold d-block degree">9&#176</span>
      <div class="description">
        <span class="d-block desc">It's</span>
        <span class="d-block desc">getting</span>
        <span class="d-block desc">cold</span>
      </div>
    </div>

    <aside class="right-aside">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle primary" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      </svg>
    </aside>
    <aside class="left-aside">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle secondary" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      </svg>
    </aside>
  </div>
  </section>
  
`;

body.appendChild(app);
app.appendChild(navBar);
// app.append(navBar);
