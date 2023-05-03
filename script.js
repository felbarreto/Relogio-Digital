const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time (){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(mn < 10) mn = '0' + mn;

    if(sec < 10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = mn;
    seconds.textContent = sec;
})