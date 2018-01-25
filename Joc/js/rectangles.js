//clasa pt dreptunghiuri
// (x1, y1) - colt stanga sus     (x2, y2) - colt dreapta jos
//obiecte_custom
function rectangle(height, width, top, left) {
    this.height = height,
    this.width = width,
    this.top = top,
    this.left = left,
    this.x1 = top,
    this.y1 = left,
    this.x2 = top + height,
    this.y2 = left + width

    rectangle.prototype.recalculate_coords = function recalculate_coords() {
        this.x1 = this.top;
        this.y1 = this.left;
        this.x2 = this.top + this.height;
        this.y2 = this.left + this.width;
    }
}
