const wsUri = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn_send");
  const geolocationBtn = document.querySelector(".btn_geolocation");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
  
  geolocationBtn.addEventListener("click", getLocation);
  
  function getLocation() {
    if ("geolocation" in navigator) {
      let locationOptions = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
    } else {
      infoOutput.innerText = "Ваш браузер не поддерживает функцию определения местоположения";
    }
  }
  
  function locationSuccess(data) {
    let link = `https://www.openstreetmap.org/#map=19/${data.coords.latitude}/${data.coords.longitude}`;
    writeToChat(`<a href="${link}" target="_blank">Ваша гео-локация</a>`);
  }
  
  function locationError() {
    infoOutput.innerText = "При получении местоположения произошла ошибка";
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);