function end_game() {
    playing = false;
    clearInterval(overall_time_interval);
    clearInterval(infestation_interval);
    clearInterval(camera_movement_interval);
    check_high_score(overall_time);
    ShowMessages.show_game_over();
}