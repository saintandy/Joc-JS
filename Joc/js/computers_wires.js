var computers = [];
var vertical_wires = [];
var horizontal_wires = [];

function create_computers_wires() {

    for (var i = 0; i < computers_row; ++i) {
        for (var j = 0; j < computers_col; ++j) {
            //array
            computers.push(new rectangle(computer_height, computer_width, (padding + i * computer_height * 2), (padding + j * computer_width * 2)));
            var id = computers.length - 1;
            computers[id].id = id;
            computers[id].infested = false;
            document.getElementById("body").innerHTML += '<div id=\'computer' + id + '\' class=\'computer\' style=\'height: ' + computer_height + '; width: ' + computer_width + '; top: ' + computers[id].top + '; left: ' + computers[id].left + ';\'>' + computers[id].id + '</div>';
            var common_value = Math.min(computer_width / 2, computer_height / 2);
            if (i > 0) { // fire verticale
                vertical_wires.push(new rectangle(computer_height, common_value , (padding + i * computer_height * 2 - computer_height), (padding + j * computer_width * 2 + computer_width / 4)));
                var current_wire = vertical_wires.length - 1;
                vertical_wires[current_wire].id = current_wire;
                vertical_wires[current_wire].shielded = false;
                vertical_wires[current_wire].virused = false;
                //onclick eveniment_mouse
                document.getElementById("body").innerHTML += '<div onclick=\'shield_wire(event, ' + current_wire + ',' + 0 + ')\' id=\'vertical_wire' + current_wire + '\' class=\'wire\' style=\'height: ' + vertical_wires[current_wire].height + '; width: ' + vertical_wires[current_wire].width + '; top: ' + vertical_wires[current_wire].top + '; left: ' + vertical_wires[current_wire].left + ';\'></div>';
            }
            if (j > 0) { // fire orizontale
                horizontal_wires.push(new rectangle(common_value, computer_width, (padding + i * computer_height * 2 + computer_height / 4), (padding + j * computer_width * 2 - computer_width)));
                var current_wire = horizontal_wires.length - 1;
                horizontal_wires[current_wire].id = current_wire;
                horizontal_wires[current_wire].shielded = false;
                horizontal_wires[current_wire].virused = false;
                document.getElementById("body").innerHTML += '<div onclick=\'shield_wire(event, ' + current_wire + ',' + 1 + ')\' id=\'horizontal_wire' + current_wire + '\' class=\'wire\' style=\'height: ' + horizontal_wires[current_wire].height + '; width: ' + horizontal_wires[current_wire].width + '; top: ' + horizontal_wires[current_wire].top + '; left: ' + horizontal_wires[current_wire].left + ';\'></div>';
            }
        }
    }

}

// 0 - vertical 
// 1 - orizontal

function shield_wire(event, wire, type) {
    if (playing == true) {
        //mouse_coord_win
        var mouseY = event.clientX;
        var mouseX = event.clientY;
        if (type == 0) {
            if (vertical_wires[wire].shielded == false) {
                vertical_wires[wire].shielded = true;
                vertical_wires[wire].shield = new rectangle(0, 0, 0, 0);
                vertical_wires[wire].shield.height = vertical_wires[wire].height / 10;;
                vertical_wires[wire].shield.width = vertical_wires[wire].width;
                vertical_wires[wire].shield.top = mouseX;
                vertical_wires[wire].shield.left = vertical_wires[wire].left;
                vertical_wires[wire].shield.recalculate_coords();
                document.getElementById("body").innerHTML += '<div id=\'vertical_shield' + wire + '\' class=\'shield\' style=\'height: ' + vertical_wires[wire].shield.height + '; width: ' + vertical_wires[wire].shield.width + '; top: ' + vertical_wires[wire].shield.top + '; left: ' + vertical_wires[wire].shield.left + ';\'></div>';
            }
        }
        else {
            if (horizontal_wires[wire].shielded == false) {
                horizontal_wires[wire].shielded = true;
                horizontal_wires[wire].shield = new rectangle(0, 0, 0, 0);
                horizontal_wires[wire].shield.height = horizontal_wires[wire].height;
                horizontal_wires[wire].shield.width = horizontal_wires[wire].width / 10;
                horizontal_wires[wire].shield.top = horizontal_wires[wire].top;
                horizontal_wires[wire].shield.left = mouseY;
                horizontal_wires[wire].shield.recalculate_coords();
                document.getElementById("body").innerHTML += '<div id=\'horizontal_shield' + wire + '\' class=\'shield\' style=\'height: ' + horizontal_wires[wire].shield.height + '; width: ' + horizontal_wires[wire].shield.width + '; top: ' + horizontal_wires[wire].shield.top + '; left: ' + horizontal_wires[wire].shield.left + ';\'></div>';
            
            }
        }
    }
}

// 0 - vertical 
// 1 - orizontal

function create_wire_virus(wire, type, direction) {
    if (type == 0) {
        //0 - se duce in sus
        //1 - se duce in jos
        if (vertical_wires[wire].virused == false) {
            vertical_wires[wire].virused = true;
            vertical_wires[wire].virus = new rectangle(0, 0, 0, 0);
            vertical_wires[wire].virus.direction = direction;
            vertical_wires[wire].virus.height = vertical_wires[wire].height / 5;
            vertical_wires[wire].virus.width = vertical_wires[wire].width;
            if (direction == 0) {
                vertical_wires[wire].virus.top = vertical_wires[wire].top + vertical_wires[wire].height;
                vertical_wires[wire].virus.left = vertical_wires[wire].left;
            }
            else {
                vertical_wires[wire].virus.top = vertical_wires[wire].top - vertical_wires[wire].virus.height;
                vertical_wires[wire].virus.left = vertical_wires[wire].left;
            }
            vertical_wires[wire].virus.recalculate_coords();
            document.getElementById("body").innerHTML += '<div id=\'vertical_virus' + wire + '\' class=\'virus\' style=\'height: ' + vertical_wires[wire].virus.height + '; width: ' + vertical_wires[wire].virus.width + '; top: ' + vertical_wires[wire].virus.top + '; left: ' + vertical_wires[wire].virus.left + ';\'></div>';
        }
    }
    else {
        //0 - se duce in dreapta
        //1 - se duce in stanga
        if (horizontal_wires[wire].virused == false) {
            horizontal_wires[wire].virused = true;
            horizontal_wires[wire].virus = new rectangle(0, 0, 0, 0);
            horizontal_wires[wire].virus.direction = direction;
            horizontal_wires[wire].virus.height = horizontal_wires[wire].height;
            horizontal_wires[wire].virus.width = horizontal_wires[wire].width / 5;
            if (direction == 0) {
                horizontal_wires[wire].virus.top = horizontal_wires[wire].top;
                horizontal_wires[wire].virus.left = horizontal_wires[wire].left - horizontal_wires[wire].virus.width;
            }
            else {
                horizontal_wires[wire].virus.top = horizontal_wires[wire].top;
                horizontal_wires[wire].virus.left = horizontal_wires[wire].left + horizontal_wires[wire].width;
            }
            horizontal_wires[wire].virus.recalculate_coords();
            document.getElementById("body").innerHTML += '<div id=\'horizontal_virus' + wire + '\' class=\'virus\' style=\'height: ' + horizontal_wires[wire].virus.height + '; width: ' + horizontal_wires[wire].virus.width + '; top: ' + horizontal_wires[wire].virus.top + '; left: ' + horizontal_wires[wire].virus.left + ';\'></div>';
        }
    }
}