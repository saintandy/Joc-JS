function create_status_bar() {
    document.getElementById("body").innerHTML += '<div id=\'status_bar\' class =\'status_bar\' style=\'height: ' + status_bar_height + 'px; width: 100%; top: ' + (window_height + padding * 2) + '\'></div>';
    document.getElementById("status_bar").innerHTML += '<div class=\'status_healty_computers\' id=\'status_healty_computers\'></div>'; //pcuri infectate
    document.getElementById("status_bar").innerHTML += '<div class=\'status_overall_timer\' id=\'status_overall_timer\'></div>'; //timer de cand a inceput jocul
    document.getElementById("status_bar").innerHTML += '<div class=\'recent_infected_computer\' id=\'recent_infected_computer\'></div>'; //pc infectat recent
    document.getElementById("status_bar").innerHTML += '<div class=\'status_high_score\' id=\'status_high_score\'></div>'; //highscore
    show_healty_computers();
    ShowMessages.show_overall_timer();
    ShowMessages.show_high_score();
}