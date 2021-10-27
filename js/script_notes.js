// Toggle menu onClick
// const btnToggle = document.querySelector('.btn-toggle-nav');
// let toggleNavStatus = false;

// let toggleNav = function () {
//     let getToggleNav = document.querySelector('.toggle-nav');

//     if (toggleNavStatus === false) {
//         getToggleNav.classList.remove('hidden');
//         getToggleNav.classList.add('visible');
//         toggleNavStatus = true;
//     } else if (toggleNavStatus === true) {
//         getToggleNav.classList.remove('visible');
//         getToggleNav.classList.add('hidden');
//         toggleNavStatus = false;
//     }
// };

// btnToggle.addEventListener('click', toggleNav);

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
const btnHome = document.querySelector('.lightgrey');
const btnLightSkyBlue = document.querySelector('.lightskyblue');
const btnLightBlue = document.querySelector('.lightblue');
const btnLightSalmon = document.querySelector('.lightsalmon');
const btnLightCoral = document.querySelector('.lightcoral');

const body = document.querySelector('.background');
const nav = document.querySelector('.btn-toggle-nav');
const h1 = document.getElementById("text").innerHTML = "#F1F1F1";

const setBackgroundColor = function (className, innerHTML) {
    body.className = 'background';
    body.classList.add(className);
    nav.className = 'btn-toggle-nav';
    nav.classList.add(className);
    document.getElementById("text").innerHTML = innerHTML;
    closeNav();
};

btnHome.addEventListener('click', function () { setBackgroundColor('background', '#F1F1F1'); });
btnLightSkyBlue.addEventListener('click', function () { setBackgroundColor('lightskyblue', 'lightskyblue'); });
btnLightBlue.addEventListener('click', function () { setBackgroundColor('lightblue', 'lightblue'); });
btnLightSalmon.addEventListener('click', function () { setBackgroundColor('lightsalmon', 'lightsalmon'); });
btnLightCoral.addEventListener('click', function () { setBackgroundColor('lightcoral', 'lightcoral'); });


// Change background color by keypress
const setBackgroundColorOnKeypress = function (key) {
    if (key.keyCode == 49 || key.keyCode == 97) {
        setBackgroundColor('background', '#F1F1F1');
    } else if (key.keyCode == 50 || key.keyCode == 98) {
        setBackgroundColor('lightskyblue', 'lightskyblue');
    } else if (key.keyCode == 51 || key.keyCode == 99) {
        setBackgroundColor('lightblue', 'lightblue');
    } else if (key.keyCode == 52 || key.keyCode == 100) {
        setBackgroundColor('lightsalmon', 'lightsalmon');
    } else if (key.keyCode == 53 || key.keyCode == 101) {
        setBackgroundColor('lightcoral', 'lightcoral');
    }
};

document.addEventListener("keypress", setBackgroundColorOnKeypress);

// const backgroundColorHome = function () {
//     console.log('Hallo');
//     body.className = 'background';
//     nav.className = 'btn-toggle-nav';

//     document.getElementById("text").innerHTML = "#F1F1F1";
// };

// const backgroundColorLightskyblue = function () {
//     body.className = 'background';
//     body.classList.add('lightskyblue');
//     nav.className = 'btn-toggle-nav';
//     nav.classList.add('lightskyblue');
//     document.getElementById("text").innerHTML = "Lightskyblue";
// };

// const backgroundColorLightblue = function () {
//     body.className = 'background';
//     body.classList.add('lightblue');
//     nav.className = 'btn-toggle-nav';
//     nav.classList.add('lightblue');
//     document.getElementById("text").innerHTML = "Lightblue";
// };

// const backgroundColorLightsalmon = function () {
//     body.className = 'background';
//     body.classList.add('lightsalmon');
//     nav.className = 'btn-toggle-nav';
//     nav.classList.add('lightsalmon');
//     document.getElementById("text").innerHTML = "Lightsalmon";
// };

// const backgroundColorLightPink = function () {
//     body.className = 'background';
//     body.classList.add('lightcoral');
//     nav.className = 'btn-toggle-nav';
//     nav.classList.add('lightcoral');
//     document.getElementById("text").innerHTML = "Lightcoral";
// };

//btnHome.addEventListener('click', setBackgroundColor);
// btnLightSkyBlue.addEventListener('click', backgroundColorLightskyblue);
// btnLightBlue.addEventListener('click', backgroundColorLightblue);
// btnLightSalmon.addEventListener('click', backgroundColorLightsalmon);
// btnLightCoral.addEventListener('click', backgroundColorLightPink);