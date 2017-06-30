"use strict";

function initialize() {
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    var marker = WE.marker([51.5, -0.09]).addTo(earth);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

    var marker2 = WE.marker([57.708870, 11.974560]).addTo(earth);
    marker2.bindPopup("<a href='https://sv.wikipedia.org/wiki/G%C3%B6teborg'>Gothenburg</a><br>Yay, you found me!", {maxWidth: 120, closeButton: false});

    var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);

    earth.setView([51.505, 0], 6);
}
