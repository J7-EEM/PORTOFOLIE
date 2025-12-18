function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}



let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('btn-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
document.body.classList.remove('darkmode')
localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("januari 1 2026 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);


const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Goede Morgen!";
} else if (time < 20) {
  greeting = "Goede Middag!";
} else {
  greeting = "Goede Avond!";
}
document.getElementById("groet").innerHTML = greeting;



const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    }
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }

};

