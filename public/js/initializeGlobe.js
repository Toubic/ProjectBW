'use strict';

function initializeGlobe() {
    const earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    const marker = WE.marker([51.5, -0.09]).addTo(earth);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br />Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

    const marker2 = WE.marker([57.708870, 11.974560]).addTo(earth);
    marker2.bindPopup("<a href='https://sv.wikipedia.org/wiki/G%C3%B6teborg'>Gothenburg</a><br>Yay, you found me!", {maxWidth: 120, closeButton: false});

    const markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);

    earth.setView([51.505, 0], 6);
}
