function search() {
    
}


function changeLightMode(lamp1, lamp2) {
    let lightsearch = 'lightsearchbutton', darksearch = 'darksearchbutton';
    let currentLight = document.getElementById(lamp1);
    let otherLight = document.getElementById(lamp2);

    if (currentLight.src.includes('darkmode')){
            console.log('From dark to light');
            currentLight.style.display = 'none';
            otherLight.style.display = 'inline';
            changeLens(darksearch, lightsearch);
            changeHeader('headertitle');
            changeBackground('#E5EBEA');
            changeBorder('#030303');
    } else {
            console.log('From light to dark');
            currentLight.style.display = 'none';
            otherLight.style.display = 'inline';
            changeLens(lightsearch, darksearch);
            changeHeader('headertitle');
            changeBackground('#030303');
            changeBorder('#E5EBEA');
    }
}


function changeLens(lens1, lens2) {
    let currentLens = document.getElementById(lens1);
    let otherLens = document.getElementById(lens2);

    currentLens.style.display = 'none';
    otherLens.style.display = 'inline';
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
    document.body.style.backgroundColor = hex;
}

function changeBorder(borderBottomColor) {
    let headerBorder = document.getElementById('header');
    headerBorder.style.borderBottomColor = borderBottomColor;
}