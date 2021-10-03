const clock = document.querySelector(".clock");

function todayTime() {
    const today = new Date;

    const todayHour = String(today.getHours()).padStart(2, "0");
    const todayMinute = String(today.getMinutes()).padStart(2, "0");
    const todaySecond = String(today.getSeconds()).padStart(2, "0");

    clock.innerText = `${todayHour} : ${todayMinute} : ${todaySecond}`
}

todayTime();

setInterval(todayTime, 1000);

