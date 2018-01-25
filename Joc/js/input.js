//nr de linii / coloane
function slider_rows() {
    document.getElementById("rows").innerHTML = document.getElementById("slider_rows").value;
}

//afiseaza setarile custom
function show_custom_settings(answer) {
    if (answer == 0) {
        document.getElementById("custom_input").style.display = "none";
        document.getElementById("difficulty").style.display = "inline";
        document.getElementById("difficulty_paragraph").style.display = "inline";
        document.getElementById("current_values").removeChild(document.getElementById("current_values").firstChild);
    }
    else {
        document.getElementById("custom_input").style.display = "inline";
        document.getElementById("difficulty").style.display = "none";
        document.getElementById("difficulty_paragraph").style.display = "none";
        show_custom_settings_change();
    }
}

//ia toate valorile din inputuri
function get_values() {
    var name = document.getElementById("name").value;
    //regexp
    var reg_name = /^[a-zA-Z]+$/;
    if (reg_name.test(name) == false) {
        alert("Invalid Input");
        return 0;
    }
    var custom = document.querySelector('input[name="custom_settings"]:checked').value;
    if (custom == 0) {
        var custom_diff = document.getElementById("difficulty").options[document.getElementById("difficulty").selectedIndex].text;
        if (custom_diff == "Easy") {
            computers_row = 3;
            computers_col = 3;
            time_computer = 4000;
            time_wire = 5000;
        }
        else if (custom_diff == "Medium") {
            computers_row = 4;
            computers_col = 4;
            time_computer = 3000;
            time_wire = 3500;
        }
        else if (custom_diff == "Hard") {
            computers_row = 5;
            computers_col = 5;
            time_computer = 2000;
            time_wire = 2500;
        }
    }
    else {
        var reg_number = /^\d+$/;
        computers_row = Number(document.getElementById("slider_rows").value);
        computers_col = computers_row;
        time_computer = Number(document.getElementById("custom_random_computer_time").value);
        if (reg_number.test(time_computer) == false) {
            alert("Invalid Input");
            return 0;
        }
        else {
            time_wire = Number(document.getElementById("custom_spreading_time").value);
            if (reg_number.test(time_wire) == false) {
                alert("Invalid Input");
                return 0;
            }
        }
        time_wire = Number(document.getElementById("custom_spreading_time").value);
        save_highscore = document.getElementById("save_high_score").checked;
        if (document.getElementById("grey_background").selected == true) {
            document.getElementById("body").style.backgroundColor = "grey";
        }
        if (document.getElementById("blue_text_color").selected == true) {
            document.getElementById("body").style.color = "blue";
        }
        if (document.getElementById("bold_text").selected == true) {
            document.getElementById("body").style.fontWeight = "bold";
        }
        
    }
    computer_height = Math.floor(window_height / (computers_row * 2 - 1));
    computer_width = Math.floor(window_width / (computers_col * 2 - 1));
    return 1;
}

//schimba numele jos
//appendchild removechild
function show_name_change() {
    document.getElementById("current_name_change").removeChild(document.getElementById("current_name_change").firstChild);
    var node = document.createElement("DIV");              
    //string  
    var textnode = document.createTextNode("Name: " + document.getElementById("name").value.toUpperCase());    
    node.appendChild(textnode);                              
    document.getElementById("current_name_change").appendChild(node); 
}

//arata daca se folosesc setari custom
//insertbefore
function show_custom_settings_change() {
    var newItem = document.createElement("div");       
    var textnode = document.createTextNode("Custom settings: ON");  
    newItem.appendChild(textnode);                    

    var list = document.getElementById("current_values");    
    list.insertBefore(newItem, list.childNodes[0]);  

}