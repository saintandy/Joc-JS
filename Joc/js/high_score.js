//localStorage
//highscore
if (localStorage.getItem("high_score") == null) {
    localStorage.setItem("high_score", 0);
}

function check_high_score(time) {
    if (save_highscore == true) {
        if (convert_time(time) > localStorage["high_score"]) {
            localStorage["high_score"] = convert_time(time);
            ShowMessages.show_high_score();
        }
    }
}