"use strict";
import { toast, toastify } from "toastify-js";
import httpService from "./httpService";
import config from "./../../config";

// Getting user's location over here
navigator.geolocation.getCurrentPosition((position) => {
  let { latitude: lat, longitude: lon } = position.coords;
  const myKey = config.MY_KEY,
    city = "port harcourt";

  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`;

  httpService
    .get(url)
    .then((response) => {
      console.log(response);
      let city = document.getElementById("city"),
        temp = document.getElementById("temp"),
        desc = document.getElementById("desc"),
        icon = document.getElementById("icon");
      city.innerText = response.data.name;
      temp.innerText = response.data.main.temp;
      desc.innerText = response.data.weather[0].description.toUpperCase();
      icon.innerHTML = `<i class="owi owi-${response.data.weather[0].icon} owi-10x"></i>`;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    })
    .then(() => {
      // always executed
    });

  const components = {
    body: document.querySelector("body"),
    app: document.getElementById("app"),
    navBar: document.createElement("nav"),
  };

  const { body, app, navBar } = components;

  setInterval(() => {
    let date = new Date();
    document.getElementById(
      "time"
    ).innerHTML = `<p class="fw-bold fs-4">${date.toLocaleTimeString()}</p>`;
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
      ...
      </div>
      <div>
        <p class="city" id="city">...</p>
      </div>
  
      <div>
        <span class="fw-bold degree" id="temp"></span>
        <span class="fw-bold degree">&#176</span>
        <span class="d-block desc" id="desc">...</span>
        </div>
        
      <aside>
        <span class="right-aside">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle primary" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          </svg>
        </span>
        <span class="left-aside">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle secondary" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          </svg>
        </span>
      </aside>
      <aside>
        <span class="icon-cnt">
          <span class="center-aside heartbeat" id="icon"></span>
        </span>
      </aside>

    </div>
    </section>
    
  `;

  body.appendChild(app);
  app.appendChild(navBar);
  // app.append(navBar);
});
