"use strict"; // Active le mode strict (slide 51)

// Récupération de l'élément bouton avec getElementById (slide 63)
const btn = document.getElementById("btn_ajouter");

// Ajout d'un écouteur d'événement "click" avec addEventListener (slide 136)
btn.addEventListener("click", function() { //appel d'une fonction sans paramètres (slide 45)
    // Appel de fonction (slide 45)
    doInsertRowTable(99, "nom", "prenom", 10);
});

    //declaration d'une fonction avec paramètres (slide 45)
function doInsertRowTable(num, nom, prenom, points) {
    const table = document.querySelector("#table_container table");
    
    // Création d'un élément HTML avec createElement (slide 51)
    const row = document.createElement("tr");
    
    // Modification d'un attribut avec setAttribute (slide 86)
    row.setAttribute("class", "row"); 

    // Création de plusieurs éléments (slide 51)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    
    // Modification du contenu avec innerText (slide 86)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    
    // Modification du contenu avec innerHTML (slide 86)
    col5.innerHTML = '<input type="checkbox">';
    
    // Affectation des classes avec setAttribute (slide 86)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_checkbox");
    
    // Ajout des colonnes à la ligne avec append (slide 86)
    row.append(col1, col2, col3, col4, col5);
    
    // Ajout de la ligne au tableau avec append (slide 86)
    table.append(row);
}