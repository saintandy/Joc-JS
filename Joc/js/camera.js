var camera = new rectangle(0, 0, 0, 0);
camera.pressed_keys = {w: 0, a: 0, s: 0, d: 0};

function create_camera() {
    camera.height = computer_height * 2.25;
    camera.width = computer_width * 2.25;
    camera.top = window_height / 2 - camera.height / 2;
    camera.left = window_width / 2 - camera.width / 2;
    camera.distance = camera_speed; // viteza cu care merge camera
    document.getElementById("body").innerHTML += '<div id=\'camera\' class =\'camera\' style=\'height: ' + camera.height + 'px; width: ' + camera.width + 'px;\'></div>';
}

//verifici coliziunea cu fiecare calculator
//eveniment_tastatura
window.onkeypress = function(key) {
    if (key.which == 32) {
        var collision_computer = camera_collision();
        if (collision_computer != -1) {
            if (computers[collision_computer].infested == true) {
                deinfest_computer(collision_computer);
            }
        }
    }
}

//deplasare_jucator_obiect
window.onkeydown = function(key) {
    if (key.which == 87) { //w - up
        camera.pressed_keys["w"] = 1;
    }
    if (key.which == 65) { //a - left
        camera.pressed_keys["a"] = 1;
    }
    if (key.which == 83) { //s - bottom
        camera.pressed_keys["s"] = 1;
    }
    if (key.which == 68) { //d - right
        camera.pressed_keys["d"] = 1;
    }
}

window.onkeyup = function(key) {
    if (key.which == 87) { //w - up
        camera.pressed_keys["w"] = 0;
    }
    if (key.which == 65) { //a - left
        camera.pressed_keys["a"] = 0;
    }
    if (key.which == 83) { //s - bottom
        camera.pressed_keys["s"] = 0;
    }
    if (key.which == 68) { //d - right
        camera.pressed_keys["d"] = 0;
    }
}

function camera_move() {

    if (document.hasFocus() == true) {
        if (camera.pressed_keys["w"] == 1) {
            if (camera.top - camera.distance > 0) {
                camera.top -= camera.distance;
            }
            else {
                camera.top = padding;
            }
        }
        if (camera.pressed_keys["a"] == 1) {
            if (camera.left - camera.distance > 0) {
                camera.left -= camera.distance;
            }
            else {
                camera.left = padding;
            }
        }
        if (camera.pressed_keys["s"] == 1) {
            if (camera.top + camera.height + camera.distance < window.innerHeight - status_bar_height) {
                camera.top += camera.distance;
            }
            else {
                camera.top = window.innerHeight - status_bar_height - padding - camera.height;
            }
        }
        if (camera.pressed_keys["d"] == 1) {
            if (camera.left + camera.width + camera.distance < window.innerWidth) {
                camera.left += camera.distance;
            }
            else {
                camera.left = window.innerWidth - padding - camera.width;
            }
        }

    }
    else {
        for (letter in camera.pressed_keys) {
            camera.pressed_keys[letter] = 0;
        }
    }
    
    camera.x1 = camera.top;
    camera.y1 = camera.left;
    camera.x2 = camera.top + camera.height;
    camera.y2 = camera.left + camera.width;

    document.getElementById("camera").style.top = camera.top + 'px';
    document.getElementById("camera").style.left = camera.left + 'px';

}

