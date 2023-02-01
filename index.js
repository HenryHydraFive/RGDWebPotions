'use strict';

let clickedBerries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let hoveredBerries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let elems = [];

window.addEventListener('load', function() {
    let warping = document.getElementById('warping');
    let resistance = document.getElementById('resistance');
    let brawn = document.getElementById('brawn');
    let affluence = document.getElementById('affluence');
    let jumping = document.getElementById('jumping');
    let luck = document.getElementById('luck');
    let healing = document.getElementById('healing');
    let protection = document.getElementById('protection');
    let regeneration = document.getElementById('regeneration');
    let stats_up = document.getElementById('stats-up');
    let swiftness = document.getElementById('swiftness');
    let chance = document.getElementById('chance');
    let sustaining = document.getElementById('sustaining');
    let ice_resistance = document.getElementById('ice-resistance');
    let fire_resistance = document.getElementById('fire-resistance');
    let balance = document.getElementById('balance');

    warping.onmouseover = function() {
        warping.style.background = 'blue';
    }
    warping.onclick = function() {
        warping.style.background = 'red';
    }
})
