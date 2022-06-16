function search() {
    
}

let lfl = 'lightflashlight', dfl = 'darkflashlight';
let lsb = 'lightsearchbutton', dsb = 'darksearchbutton';
let hdr = 'headertitle', lbg = '#FFD673', dbg = '#030303';
let ldp = 'lightdisplay', ddp = 'darkdisplay';
let lcr = '#FFFFFF', dcr = '#030303';

function lightToDark() {
    console.log('From light to dark');
    changeFlashlight(lfl, dfl);
    changeLens(lsb, dsb);
    changeColor(lcr);
    changeHeader(hdr);
    changeBackground(dbg);
    changeBorder(lcr);
    changeDisplay(ldp, ddp);
}

function darkToLight() {
    console.log('From dark to light');
    changeFlashlight(dfl, lfl);
    changeLens(dsb, lsb);
    changeColor(dcr);
    changeHeader(hdr);
    changeBackground(lbg);
    changeBorder(dbg);
    changeDisplay(ddp, ldp);
} 

function changeFlashlight(flashlight1, flashlight2) {
    currentFlashight = document.getElementById(flashlight1);
    otherFlashlight = document.getElementById(flashlight2);

    currentFlashight.style.display = 'none';
    otherFlashlight.style.display = 'inline';
} 

function changeLens(lens1, lens2) {
    let currentLens = document.getElementById(lens1);
    let otherLens = document.getElementById(lens2);

    currentLens.style.display = 'none';
    otherLens.style.display = 'inline';
} 

function changeColor(Color) {
    let fontList = document.getElementsByTagName('p');
    for (para of fontList) para.style.color = Color;
    fontList = document.getElementsByTagName('li');
    for (para of fontList) para.style.color = Color;
}

function changeHeader(headertitle) {
    let headerLight = document.getElementById(headertitle);
    if (headerLight.className == 'lightmode') {
        headerLight.className = 'darkmode';
    } else {
        headerLight.className = 'lightmode';
        headerLight.style.borderBottomColor = '#030303';
    }
} 

function changeBackground(hex) {
    let headerBackground = document.getElementById('header');
    headerBackground.style.backgroundColor = hex;
    document.body.style.backgroundColor = hex;
} 

function changeBorder(borderBottomColor) {
    let headerBorder = document.getElementById('header');
    headerBorder.style.borderBottomColor = borderBottomColor;
}

function changeDisplay(dis1, dis2) {
    let currentDisplay = document.getElementById(dis1);
    let otherDisplay = document.getElementById(dis2);

    currentDisplay.style.display = 'none';
    otherDisplay.style.display = 'inline';
}

