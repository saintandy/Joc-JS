## Helper pentru notare

rectangles - clasa pentru dreptunghiuri
    recalculate_coords - recalculeaza coordonatele colturilor

camera - functiile pentru camera
    create_camera - creeaza camera
    primul onkeypress - folosit pentru space, cand dezinfecteaza un pc
    al 2-lea onkeypress si onkeyup-ul - folosit pentru miscar (wasd), schimba valorile intr-un map
    camera_move - verifica map-ul pentru tastele apasate si modifica css-ul si coordonatele camerei pentru a o misca

collision - functii pentru coliziune
    rectangle_collision - verifica daca un dreptunghi este in interiorul altuia
    camera_collision - verifica daca este vreun pc in interiorul camerei (folosita la dezinfectare)

computer_wires - creeaza calculatoare si firele, are functii pentru creearea virusilor si a scuturilor
    creeate_computer_wires - creeaza calculatoarele si firele
    shield_wire - pune scutul pe un fir
    create_wire_virus - pune virusul pe scut

end_game - functii apelate la sfarsitul jocului
    end_game - functie apelata cand se termina jocul, sterge intervalele si verifica highscore-ul

high_score - creeaza variabila pentru highscore in localstorage si functii pentru ea 
    check_high_score - verifica highscore-ul

infestation - functii pentru infectare
    infest_random_computer - infecteaza un pc random dupa un timp
    get_healty_computers - returneaza numarul de pc-uri neinfectate
    delete_virus - sterge virusul de pe un fir 
    delete_shield - sterge scutul de pe un fir
    move_virus - functie pentru miscarea virusului si coliziuni cu scuturi si pc-uri
    infest_neighbour - face intervalele pentru a imprastia virusul la vecini
    spread_infestation - verifica vecinii pe care ii poate infecta
    infest_computer - infecteaza un pc 
    deinfest_computer - deinfecteaza un pc

initialize - creeaza variabilele de inceput
    start - porneste jocul

input - functii pentru input-urile de la setarile custom
    slider_rows - ia numarul de linii / coloane
    show_custom_settings - afiseaza setarile custom
    get_values - ia valorile din inputuri
    show_name_change - schimba numele din partea de jos
    show_custom_settings_change - afiseaza in partea de jos daca se folosesc setari custom

score - functii pentru scor
    overall_score_add - adauga puncte la scor
    convert_score - converteste scorul la o alta forma

show_messages - functii pentru afisat mesaje in bara de jos si data la inceputul jocului
    show_healty_computers - afiseaza numarul de pc-uri neinfectate
    show_recent_infected_computer - afiseaza numarul pc-ulu infectat recent 
    ShowMesages - namespace pentru afisarea mesajelor
        show_game_over - afiseaza ca jocul s-a terminat
        show_overall_score - afiseaza scorul
        show_high_score - afiseaza highscore-ul
        show_date - afiseaza data

status_bar - functii pentru bara de jos
    create_status_bar - creeaza bara de jos

values - valorile unor variabile

