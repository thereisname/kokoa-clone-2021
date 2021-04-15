const clockContainer = document.querySelector(".status-bar--time"), 
colckTitle = clockContainer.querySelector("span");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours()

    colckTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` :minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 60000)
}

init();