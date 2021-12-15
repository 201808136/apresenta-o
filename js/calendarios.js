// check for JS
console.log("hello world!");

// check for jquery
$(function () {
  console.log("hello jquery!");
});

var myClass = $("#today").attr("class");
    console.log(myClass);

//criar as datas do calendário
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();
  document.querySelector("#data").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
//ir buscar o dia de hoje
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div id="today" class="`+i+`" >${i}</div>`;
  
    }else {
      days += `<div id="dates" class="`+i+`">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
/*
let a = Math.floor((Math.random() * 31) + 1);
let b = Math.floor((Math.random() * 31) + 1);
let c = Math.floor((Math.random() * 31) + 1);
let d = Math.floor((Math.random() * 31) + 1);
let e = Math.floor((Math.random() * 31) + 1);
let f = Math.floor((Math.random() * 31) + 1);
let g = Math.floor((Math.random() * 31) + 1);

$(".yesterday").css("background-color", "lime");
$(".yesterday2").css("background-color", "green");
$(".yesterday3").css("background-color", "orange");
*/