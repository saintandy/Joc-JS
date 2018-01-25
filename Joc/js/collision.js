// rectangle2 in rectangle1
function rectangle_collision(rectangle1, rectangle2) {
    if (rectangle1.x1 <= rectangle2.x1 && rectangle1.x2 >= rectangle2.x2) {
        if (rectangle1.y1 <= rectangle2.y1 && rectangle1.y2 >= rectangle2.y2) {
            return true;
        }
    }
    return false;
}

//test_coliziune
function camera_collision() {
    for (var computer = 0; computer < computers.length; ++computer) {
        if (rectangle_collision(camera, computers[computer]) == true) {
            return computer;
        }
    }
    return -1;
}