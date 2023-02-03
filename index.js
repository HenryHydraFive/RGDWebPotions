/*Don't judge me for this code, it is hands down the worst code I have ever written but it was my first script using js and I was lazy*/
/*I'll improve it later by making a new script that uses a map of all panel and button elements to traverse and 
make a generalized function for changing element colors instead of this abomination*/

'use strict';

let clickedBerries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    let abate = document.getElementById('abate');
    let accrue = document.getElementById('accrue');
    let algid = document.getElementById('algid');
    let ardor = document.getElementById('ardor');
    let cavort = document.getElementById('cavort');
    let gambol = document.getElementById('gambol');
    let fervor = document.getElementById('fervor');
    let ichor = document.getElementById('ichor');
    let lucre = document.getElementById('lucre');
    let luminous = document.getElementById('luminous');
    let skew = document.getElementById('skew');
    let tenebrous = document.getElementById('tenebrous');
    let theriac = document.getElementById('theriac');
    let torrid = document.getElementById('torrid');
    let vigor = document.getElementById('vigor');
    let virulent = document.getElementById('virulent');


    abate.onmouseover = function() {
        warping.style.background = 'yellow';
        luck.style.background = 'yellow';
    }

    abate.onmouseleave = function() {
        warping.style.background = "rgb(131, 131, 131)";
        luck.style.background = "rgb(131, 131, 131)";
    }
    
    accrue.onmouseover = function() {
        luck.style.background = 'yellow';
        healing.style.background = 'yellow';
    }
    
    accrue.onmouseleave = function() {
        luck.style.background = "rgb(131, 131, 131)";
        healing.style.background = "rgb(131, 131, 131)";
    }

    algid.onmouseover = function() {
        ice_resistance.style.background = 'yellow';
        balance.style.background = 'yellow';
    }

    algid.onmouseleave = function() {
        ice_resistance.style.background = "rgb(131, 131, 131)";
        balance.style.background = "rgb(131, 131, 131)";
    }

    ardor.onmouseover = function() {
        resistance.style.background = 'yellow';
        protection.style.background = 'yellow';
    }

    ardor.onmouseleave = function() {
        resistance.style.background = "rgb(131, 131, 131)";
        protection.style.background = "rgb(131, 131, 131)";
    }

    cavort.onmouseover = function() {
        jumping.style.background = 'yellow';
        chance.style.background = 'yellow';
    }

    cavort.onmouseleave = function() {
        jumping.style.background = "rgb(131, 131, 131)";
        chance.style.background = "rgb(131, 131, 131)";
    }

    fervor.onmouseover = function() {
        healing.style.background = 'yellow';
        protection.style.background = 'yellow';
    }

    fervor.onmouseleave = function() {
        healing.style.background = "rgb(131, 131, 131)";
        protection.style.background = "rgb(131, 131, 131)";
    }

    gambol.onmouseover = function() {
        stats_up.style.background = 'yellow';
        swiftness.style.background = 'yellow';
    }

    gambol.onmouseleave = function() {
        stats_up.style.background = "rgb(131, 131, 131)";
        swiftness.style.background = "rgb(131, 131, 131)";
    }

    ichor.onmouseover = function() {
        warping.style.background = 'yellow';
        brawn.style.background = 'yellow';
    }

    ichor.onmouseleave = function() {
        warping.style.background = "rgb(131, 131, 131)";
        brawn.style.background = "rgb(131, 131, 131)";
    }

    lucre.onmouseover = function() {
        affluence.style.background = 'yellow';
        jumping.style.background = 'yellow';
    }

    lucre.onmouseleave = function() {
        affluence.style.background = "rgb(131, 131, 131)";
        jumping.style.background = "rgb(131, 131, 131)";
    }

    luminous.onmouseover = function() {
        fire_resistance.style.background = 'yellow';
        ice_resistance.style.background = 'yellow';
    }

    luminous.onmouseleave = function() {
        fire_resistance.style.background = "rgb(131, 131, 131)";
        ice_resistance.style.background = "rgb(131, 131, 131)";
    }

    skew.onmouseover = function() {
        swiftness.style.background = 'yellow';
        chance.style.background = 'yellow';
    }

    skew.onmouseleave = function() {
        swiftness.style.background = "rgb(131, 131, 131)";
        chance.style.background = "rgb(131, 131, 131)";
    }

    tenebrous.onmouseover = function() {
        stats_up.style.background = 'yellow';
        sustaining.style.background = 'yellow';
    }

    tenebrous.onmouseleave = function() {
        stats_up.style.background = "rgb(131, 131, 131)";
        sustaining.style.background = "rgb(131, 131, 131)";
    }

    theriac.onmouseover = function() {
        regeneration.style.background = 'yellow';
        sustaining.style.background = 'yellow';
    }

    theriac.onmouseleave = function() {
        regeneration.style.background = "rgb(131, 131, 131)";
        sustaining.style.background = "rgb(131, 131, 131)";
    }

    torrid.onmouseover = function() {
        fire_resistance.style.background = 'yellow';
        balance.style.background = 'yellow';
    }

    torrid.onmouseleave = function() {
        fire_resistance.style.background = "rgb(131, 131, 131)";
        balance.style.background = "rgb(131, 131, 131)";
    }

    vigor.onmouseover = function() {
        resistance.style.background = 'yellow';
        brawn.style.background = 'yellow';
    }

    vigor.onmouseleave = function() {
        resistance.style.background = "rgb(131, 131, 131)";
        brawn.style.background = "rgb(131, 131, 131)";
    }

    virulent.onmouseover = function() {
        affluence.style.background = 'yellow';
        regeneration.style.background = 'yellow';
    }

    virulent.onmouseleave = function() {
        affluence.style.background = "rgb(131, 131, 131)";
        regeneration.style.background = "rgb(131, 131, 131)";
    }

    abate.onclick = function() {
        if (clickedBerries[0]) {
            clickedBerries[0] = 0;
            abate.style.background = "rgb(233, 233, 233)";
        }
        else {
            clickedBerries[0] = 1;
            abate.style.background = 'lightgreen';
        }

    }
})