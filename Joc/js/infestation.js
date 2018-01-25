//infecteaza pc random dupa un timp
//random
function infest_random_computer() {
    if (get_healty_computers() > 0) {
        //math
        var new_infestation = Math.floor(Math.random() * get_healty_computers() + 1); // the pc to be infested
        for (var computer = 0; computer < computers.length; ++computer) {
            if (computers[computer].infested == false) {
                new_infestation--;
            }
            if (new_infestation == 0) {
                infest_computer(computer);
                //afisare_mesaje_joc
                show_recent_infected_computer(computer);
                break;
            }
        }
    }
    if (get_healty_computers() == 0) {
        clearInterval(infestation_interval);
    }
}

//nr computere neinfectate
function get_healty_computers() {
    var healty_computers = 0;
    for (computer = 0; computer < computers.length; ++computer) {
        if (computers[computer].infested == false) {
            healty_computers++;
        }
    }
    return healty_computers;
}

//sterege un virus(cerc)
function delete_virus(wire, type) {
    if (type == 0) {
        clearInterval(vertical_wires[wire].interval);
    }
    else {
        clearInterval(horizontal_wires[wire].interval);
    }
    if (type == 0) {
        if (vertical_wires[wire].virused == true) {
            vertical_wires[wire].virused = false;
            document.getElementById("vertical_virus" + wire).remove();
        }
    }
    else {
        if (horizontal_wires[wire].virused == true) {
            horizontal_wires[wire].virused = false;
            document.getElementById("horizontal_virus" + wire).remove();
        }
    }
}

//sterge un scut
function delete_shield(wire, type) {
    if (type == 0) {
        if (vertical_wires[wire].shielded == true) {
            vertical_wires[wire].shielded = false;
            document.getElementById("vertical_shield" + wire).remove();
        }
    }
    else {
        if (horizontal_wires[wire].shielded == true) {
            horizontal_wires[wire].shielded = false;
            document.getElementById("horizontal_shield" + wire).remove();
        }
    }
}

// 0 - vertical 
// 1 - orizontal

//0 - se duce in sus
//1 - se duce in jos

//0 - se duce in dreapta
//1 - se duce in stanga

//functie pt animatie si coliziune cu scut si pc la virus
//deplasare_independenta_obiect
function move_virus(computer, wire, type, direction, speed) {
    if (type == 0) {
        if (direction == 0) {
            vertical_wires[wire].virus.top -= speed;
            vertical_wires[wire].virus.recalculate_coords();
            if (vertical_wires[wire].shielded == true) {
                if (vertical_wires[wire].shield.x2 >= vertical_wires[wire].virus.x1 && vertical_wires[wire].shield.x1 <= vertical_wires[wire].virus.x1) {
                    delete_virus(wire, type);
                    delete_shield(wire, type);
                    return 0;
                }
            }
            if (computers[computer].x2 >= vertical_wires[wire].virus.x1) {
                delete_virus(wire, type);
                if (computers[computer].infested == false) {
                    infest_computer(computer);
                }
                return 0;
            }
        }
        else {
            vertical_wires[wire].virus.top += speed;
            vertical_wires[wire].virus.recalculate_coords();
            if (vertical_wires[wire].shielded == true) {
                if (vertical_wires[wire].shield.x1 <= vertical_wires[wire].virus.x2 && vertical_wires[wire].shield.x2 >= vertical_wires[wire].virus.x2) {
                    delete_virus(wire, type);
                    delete_shield(wire, type);
                    return 0;
                }
            }
            if (computers[computer].x1 <= vertical_wires[wire].virus.x2) {
                delete_virus(wire, type);
                if (computers[computer].infested == false) {
                    infest_computer(computer);
                }
                return 0;
            }
        }
        document.getElementById("vertical_virus" + wire).style.top = vertical_wires[wire].virus.top + "px";

    }
    else {
        if (direction == 0) {
            horizontal_wires[wire].virus.left += speed;
            horizontal_wires[wire].virus.recalculate_coords();
            if (horizontal_wires[wire].shielded == true) {
                if (horizontal_wires[wire].shield.y1 <= horizontal_wires[wire].virus.y2 && horizontal_wires[wire].shield.y2 >= horizontal_wires[wire].virus.y2) {
                    delete_virus(wire, type);
                    delete_shield(wire, type);
                    return 0;
                }
            }
            if (computers[computer].y1 <= horizontal_wires[wire].virus.y2) {
                delete_virus(wire, type);
                if (computers[computer].infested == false) {
                    infest_computer(computer);
                }
                return 0;
            }
        }
        else {
            horizontal_wires[wire].virus.left -= speed;
            horizontal_wires[wire].virus.recalculate_coords();
            if (horizontal_wires[wire].shielded == true) {
                if (horizontal_wires[wire].shield.y2 >= horizontal_wires[wire].virus.y1 && horizontal_wires[wire].shield.y1 <= horizontal_wires[wire].virus.y1) {
                    delete_virus(wire, type);
                    delete_shield(wire, type);
                    return 0;
                }
            }
            if (computers[computer].y2 >= horizontal_wires[wire].virus.y1) {
                delete_virus(wire, type);
                if (computers[computer].infested == false) {
                    infest_computer(computer);
                }
                return 0;
            }
        }
        document.getElementById("horizontal_virus" + wire).style.left = horizontal_wires[wire].virus.left + "px";
    }
    
}

//face intervalele pt a imprastia virusul la vecini
function infest_neighbour(computer, wire, type, direction) {
    //setTimeout
    setTimeout(function() {
    var ok = 0;
    if (type == 0) {
        if (vertical_wires[wire].virused == false) {
            ok = 1;
        }
    }
    else {
        if (horizontal_wires[wire].virused == false) {
            ok = 1;
        }
    }
    if (ok == 1) {
        create_wire_virus(wire, type, direction);
        if (type == 0) {
            //setInterval
            vertical_wires[wire].interval = setInterval(function() {move_virus(computer, wire, type, direction, vertical_wires[wire].height / (time_wire / infest_interval_time))}, infest_interval_time);
        }
        else {
            horizontal_wires[wire].interval = setInterval(function() {move_virus(computer, wire, type, direction, horizontal_wires[wire].width / (time_wire / infest_interval_time))}, infest_interval_time);
        }
    }}, infest_interval_time);
}

//verifica vecinii pe care ii poate infecta
function spread_infestation(computer) {
    //dreapta
    if (computer % computers_col != computers_col - 1) {
        var wire = computer - Math.floor(computer / computers_row);
        infest_neighbour(computer + 1, wire, 1, 0);
    }
    //stanga
    if (computer % computers_col != 0) {
        var wire = computer - Math.floor(computer / computers_row) - 1;
        infest_neighbour(computer - 1, wire, 1, 1);
    }
    //sus
    if (Math.floor(computer / computers_col) > 0) {
        var wire = computer - computers_row;
        infest_neighbour(computer - computers_col, wire, 0, 0);
    }
    //jos
    if (Math.floor(computer / computers_col) < computers_row - 1) {
        var wire = computer;
        infest_neighbour(computer + computers_col, wire, 0, 1);
    }
}

//infecteaza un computer
function infest_computer(computer) {
    if (playing == true) {
        //schimbare_css
        document.getElementById('computer' + computer).style.borderColor = "red";
        computers[computer].infested = true;
        //statistici_live
        show_healty_computers();
        if (get_healty_computers() == 0) {
            end_game();
        }
        if (playing == true) {
            spread_infestation(computer);
        }
    }
}

//dezinfecteaza un computer
function deinfest_computer(computer) {
    if (playing == true) {
        document.getElementById('computer' + computer).style.borderColor = "blue";
        computers[computer].infested = false;
        show_healty_computers();
    }
}
