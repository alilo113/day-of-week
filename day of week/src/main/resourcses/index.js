let dayOfWeek = document.getElementById("dayOfWeek");

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let d = new Date();
const date = weekday[d.getDay()];

function ClickTOGetDay(){
    dayOfWeek.innerHTML = date;
}