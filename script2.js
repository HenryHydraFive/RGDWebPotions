'use strict'

window.addEventListener('load', function() {
    var berry_buttons = document.getElementsByClassName('berry-button');
    var potion_panels = document.getElementsByClassName('potion-panel');
    var berry_lightups = new Map();
    var potion_panel_objs = new Array();
    var j, i;

    for (i = 0; i < berry_buttons.length; i++) berry_lightups.set(berry_buttons[i].id, new Array());

    for (i = 0; i < potion_panels.length; i++) {
        let berry_text = potion_panels[i].children[2].innerHTML.toLowerCase().split(" ");
        for (j = 0; j < berry_text.length; j++) berry_text[j] = berry_text[j].replace(/[\r\n\t]/g, "");
        let b1 = berry_lightups.get(berry_text[0]);
        let b2 = berry_lightups.get(berry_text[2]);
        potion_panel_objs.push(new potion_panel_obj(potion_panels[i], b1, b2));
        b1.push(potion_panels[i]);
        b2.push(potion_panels[i]);
    }        

    berry_lightups.forEach((value, key) => {
        let berry_elem = document.getElementById(key);
        console.log(berry_elem);
        berry_elem.onmouseover = function () {panel_lightup(value, "yellow")};
        berry_elem.onmouseleave = function () {panel_lightup(value, "rgb(131, 131, 131)")};
        berry_elem.onclick = function () {berry_click(berry_elem, potion_panel_objs)};
    })
    function panel_lightup(panels, color) {
        console.log(panels);
        panels[0].style.background = color;
        panels[1].style.background = color;
    }

    function berry_click(berry_button, potion_panel_objs) {
        if (berry_button.style.background == "rgb(233, 233, 233)" || berry_button.style.background == "yellow") berry_button.style.background = "lightgreen";
        else berry_button.style.background = "rgb(233, 233, 233)";

        for (let i = 0; i < potion_panel_objs.length; i++) {
            if ((potion_panel_objs[i].berry1).style.background == "lightgreen" && (potion_panel_objs[i].berry2).style.background == "lightgreen") (potion_panel_objs[i].panel).style.background = "lightgreen";
            else (potion_panel_objs[i].panel).background = "rgb(131, 131, 131)";
        }
    }

    function potion_panel_obj(panel, berry1, berry2) {
        this.panel = panel;
        this.berry1 = berry1;
        this.berry2 = berry2;
    }
})
