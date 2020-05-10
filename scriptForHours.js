'use strict';

let deadline = '2020-05-11';

function getTimeRemaining(endTime) {
  let
    t = Date.parse(endTime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  let
    minutes = Math.floor((t / 1000 / 60) % 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let
    hours = Math.floor((t / (1000 * 60 * 60)));
  if (hours < 10) {
    hours = '0' + hours;
  }

  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function setClock(id, endTime) {
  let
    timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    let t = getTimeRemaining(endTime);
    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock('timer', deadline);