"use strict";

// const myKey = config.MY_KEY;
// let url = "https://api.openweathermap.org/data/2.5/weather?q=calabar&appid=";
// url += myKey;
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("app").innerHTML = `<p>${data.name}</p>`;
//   });

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

navBar.innerHTML = `<nav class="navbar navbar-light bg-light">
  <div class="container-fluid d-flex .justify-content-lg-between">
    <div>
      <a class="navbar-brand fs-1">Kairos</a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </div>
  </div>
</nav>

<section class="container">
  <div class="time" id="time">
  </div>
  <div>
    <p class="fw-bolder fs-2">Port Harcourt</p>
  </div>
</section>

<section class="container">
  <div>
    <span class="fw-bold d-block degree">9&#176</span>
    <span class="fw-bold d-block">It's</span>
    <span class="fw-bold d-block">getting</span>
    <span class="fw-bold d-block">cold</span>
  </div>
</section>

<aside>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
</aside>
`;

body.append(app);
app.appendChild(navBar);
// app.append(navBar);
