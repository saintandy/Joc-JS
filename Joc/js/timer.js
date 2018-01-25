var overall_time = 0;

//timerul jocului
function overall_timer() {
    overall_time += 10;
    check_high_score(overall_time);
    ShowMessages.show_overall_timer();
}

function convert_time(time) {
    return Math.floor(time / 100) / 10;
}