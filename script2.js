'use strict'

window.addEventListener('load', function() {
    var berry_buttons = document.getElementsByClassName('berry-button');
    var potion_panels = document.getElementsByClassName('potion-panel');
    var berry_lightups = new Map();
    var j, i;

    for (i = 0; i < berry_buttons.length; i++) berry_lightups.set(berry_buttons[i].id, new Array());

    for (i = 0; i < potion_panels.length; i++) {
        let berry_text = potion_panels[i].children[2].innerHTML.toLowerCase().split(" ");
        for (j = 0; j < berry_text.length; j++) berry_text[j] = berry_text[j].replace(/[\r\n\t]/g, "");
        (berry_lightups.get(berry_text[0])).push(potion_panels[i]);
        (berry_lightups.get(berry_text[2])).push(potion_panels[i]);
    }        

    berry_lightups.forEach((value, key) => {
        let berry_elem = document.getElementById(key);
        console.log(berry_elem);
        berry_elem.onmouseover = panel_lightup(value, "yellow");
        berry_elem.onmouseleave = panel_lightup(value, "rgb(131, 131, 131)");
    })
    function panel_lightup(panels, color) {
        console.log(panels);
        panels[0].style.background = color;
        panels[1].style.background = color;
    }
})
