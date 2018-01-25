function show_healty_computers() {
    document.getElementById("status_healty_computers").innerHTML = 'Healty Computers: ' + get_healty_computers() + ' / ' + computers_row * computers_col;
}

function show_recent_infected_computer(computer) {
    document.getElementById("recent_infected_computer").innerHTML = "Computer " + computer + " has been infected";
}

//namespace
//afisare_mesaje_joc
var ShowMessages = {
   show_game_over: function() {
        document.getElementById("status_healty_computers").innerHTML += "       Game Over";
    },
    show_overall_timer: function() {
        document.getElementById("status_overall_timer").innerHTML = 'Time: ' + convert_time(overall_time);
    },
    show_high_score: function() {
        document.getElementById("status_high_score").innerHTML = 'High Score: ' + localStorage["high_score"];
    },
    show_date: function() {
        //date
        document.getElementById("current_date").innerHTML = 'Date: ' + new Date();
    }
    
}