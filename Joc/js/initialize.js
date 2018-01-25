var status_bar_height = 30; // inaltime bara de jos
var padding = 10; // padding-ul din body
var window_width = window.innerWidth - padding * 2;
var window_height = window.innerHeight - padding * 2 - status_bar_height;
var computers_row = 8; // nr linii
var computers_col = 6; // nr coloane
var save_highscore = true;

//height si width pt patrate / fire
var computer_height = 0;
var computer_width = 0;

//calculatoare neinfestate
var remaining_time = 0; // time until next computer infestation

var playing = true; //daca nu s-a terminat jocul

function start() {
    var ok = get_values();
    if (ok == 1) {
        document.getElementById("body").innerHTML = "";
        create_computers_wires(); //face firele si pcurile
        create_status_bar(); //face bara de jos
        create_camera(); //face camera
        camera_movement_interval = setInterval(camera_move, 10);
        infestation_interval = setInterval(infest_random_computer, time_computer);
        overall_time_interval = setInterval(overall_timer, 10);
    }
}