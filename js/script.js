// Toggle menu onClick
/*
const btnToggle = document.querySelector('.btn-toggle-nav');
let toggleNavStatus = false;

let toggleNav = function () {
    let getToggleNav = document.querySelector('.toggle-nav');

    if (toggleNavStatus === false) {
        getToggleNav.classList.remove('hidden');
        getToggleNav.classList.add('visible');
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getToggleNav.classList.remove('visible');
        getToggleNav.classList.add('hidden');
        toggleNavStatus = false;
    }
};

 btnToggle.addEventListener('click', toggleNav);
 */

// Toggle menu onMouseOver/onMouseOut
const btnToggle = document.querySelector('.main-nav');
const getToggleNav = document.querySelector('.toggle-nav');

const openNav = function () {
    getToggleNav.classList.remove('hidden');
    getToggleNav.classList.add('visible');
}

const closeNav = function () {
    getToggleNav.classList.remove('visible');
    getToggleNav.classList.add('hidden');
}

btnToggle.addEventListener('mouseover', openNav);
btnToggle.addEventListener('mouseout', closeNav);

// Change background color
const btnLightGrey = document.querySelector('.lightgrey');
const btnLightSkyBlue = document.querySelector('.lightskyblue');
const btnLightBlue = document.querySelector('.lightblue');
const btnLightSalmon = document.querySelector('.lightsalmon');
const btnLightCoral = document.querySelector('.lightcoral');

const body = document.querySelector('.background');
const nav = document.querySelector('.btn-toggle-nav');
const h1 = document.getElementById("text").innerHTML = "Lightgrey";

const setBackgroundColor = function (className, innerHTML) {
    body.className = 'background';
    body.classList.add(className);
    nav.className = 'btn-toggle-nav';
    nav.classList.add(className);
    document.getElementById("text").innerHTML = innerHTML;
    closeNav();
};

btnLightGrey.addEventListener('click', function () { setBackgroundColor('background', 'Lightgrey'); });
btnLightSkyBlue.addEventListener('click', function () { setBackgroundColor('lightskyblue', 'Lightskyblue'); });
btnLightBlue.addEventListener('click', function () { setBackgroundColor('lightblue', 'Lightblue'); });
btnLightSalmon.addEventListener('click', function () { setBackgroundColor('lightsalmon', 'Lightsalmon'); });
btnLightCoral.addEventListener('click', function () { setBackgroundColor('lightcoral', 'Lightcoral'); });


// Change background color by keypress
const setBackgroundColorOnKeypress = function (key) {
    if (key.keyCode == 49 || key.keyCode == 97) {
        setBackgroundColor('background', 'Lightgrey');
    } else if (key.keyCode == 50 || key.keyCode == 98) {
        setBackgroundColor('lightskyblue', 'Lightskyblue');
    } else if (key.keyCode == 51 || key.keyCode == 99) {
        setBackgroundColor('lightblue', 'Lightblue');
    } else if (key.keyCode == 52 || key.keyCode == 100) {
        setBackgroundColor('lightsalmon', 'Lightsalmon');
    } else if (key.keyCode == 53 || key.keyCode == 101) {
        setBackgroundColor('lightcoral', 'Lightcoral');
    }
};

document.addEventListener("keypress", setBackgroundColorOnKeypress);