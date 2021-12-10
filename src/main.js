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
  document.getElementById("time").innerHTML = `<p>${date.toUTCString()}</p>`;
}, 1000);

navBar.innerHTML = `<nav class="navbar navbar-light bg-light">
  <div class="container-fluid d-flex .justify-content-lg-between">
    <div>
      <a class="navbar-brand">Kairos</a>
    </div>
    <div>
      <i class="bi bi-list"></i>
    </div>
  </div>
</nav>

<section>
  <div class="time" id="time">
  </div>
</section>
`;

body.appendChild(app);
app.appendChild(navBar);
// app.append(navBar);
