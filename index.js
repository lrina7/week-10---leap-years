let year = document.querySelector(".year").value;
year = Number(year);
let button = document.querySelector(".button");
let result = document.querySelector(".result");

button.onclick = function () {
if((year % 4 == 0 && year % 100 !== 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)) {
    result.textContent = "Это високосный год";
} else {
    result.textContent = "Год не является високосным";
}
}
