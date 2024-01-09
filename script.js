function clock(){
    var h = document.getElementsByClassName('hr')[0];
    var m = document.getElementsByClassName('mn')[0];
    var s = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    var sound = new Audio('clock.mp3');
    sound.play();
}

setInterval(clock, 1000);