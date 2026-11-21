"use strict"; // Active le mode strict (slide 51)

// Déclaration d'un tableau d'objets (slide 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Déclaration d'une variable globale avec let (slide 51)
let lignes = 0;

// Déclaration d'une fonction (slide 45)
function init() {
    // Utilisation de la méthode forEach pour parcourir un tableau (slide 44)
    persons.forEach(person => { // Fonction fléchée (slide 46)
        doInsert(person.nom, person.prenom, person.points);
    });
}

// Déclaration d'une fonction avec paramètres (slide 45)
function doInsert(nom, prenom, points) {
    lignes++; // Opérateur d'incrémentation (slide 41)
    doInsertRowTable(lignes, nom, prenom, points);
}

// Déclaration d'une fonction avec paramètres (slide 45)
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

    // Appel de la fonction de mise à jour du résumé (slide 45)
    updateSummary();
}

// Déclaration de la fonction (slide 45)
function updateSummary() {
    // Sélection de plusieurs éléments avec querySelectorAll (slide 76)
    const rows = document.querySelectorAll("#table_container table tr");
    const nbRows = rows.length - 1; 
    
    // Déclaration d'une variable locale avec let (slide 51)
    let totalPoints = 0;
    
    // Boucle for classique (slide 44)
    for (let i = 1; i < rows.length; i++) {
        const pointsText = rows[i].querySelectorAll("td")[3].innerText;
        
        // Utilisation d'un opérateur de combiné(slide 41)
        totalPoints += parseInt(pointsText); 
    }
    
    // Manipulation du DOM avec getElementById (slide 63) et innerText (slide 86)
    document.getElementById("p1").innerText = nbRows + " ligne (s)";
    document.getElementById("p3").innerText = "Total point (s)= " + totalPoints;
}

// Déclaration de la fonction de suppression (slide 45)
function deleteRow() {
    // Structure conditionnelle if et opérateur d'égalité stricte === (slide 41)
    if (lignes === 0) {
        // Boîte de dialogue d'alerte avec window.alert (slide 34)
        window.alert("Le tableau est déjà vide.");
        return; // Instruction de retour (slide 45)
    }
    
    // Sélection avec querySelectorAll et sélecteur d'attribut (slide 76)
    const checkboxes = document.querySelectorAll(".col_checkbox input[type='checkbox']");
    let hasChecked = false;
    
    checkboxes.forEach(cb => {
        // Propriété checked de l'élément input (slide 86)
        if (cb.checked) hasChecked = true;
    });

    // Opérateur logique NON ! (slide 41)
    if (!hasChecked) {
        window.alert("Sélectionnez au moins une ligne !");
        return; 
    }

    // Boîte de dialogue de confirmation avec window.confirm (slide 35)
    if (!window.confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
        return; 
    }
    
    const rows = document.querySelectorAll("#table_container table tr");
    
    // Boucle for (slide 44)
    for (let i = rows.length - 1; i > 0; i--) {
        const row = rows[i];
        const checkbox = row.querySelector(".col_checkbox input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            // Suppression d'un élément du DOM avec remove() (slide 86)
            row.remove();
            // Opérateur de décrémentation (slide 41)
            lignes--;
        }
    }
    
    updateSummary(); 
    window.alert("Suppression effectuée avec succès !");
}

// Déclaration de la fonction de récupération des nouvelles données (slide 45)
function doNewData() {
    const nom = document.getElementById("input_nom").value.trim();
    const prenom = document.getElementById("input_prenom").value.trim();
    const points = document.getElementById("input_points").value.trim();
    
    // Structure conditionnelle if avec opérateurs logiques || (slide 41) et vérification avec Number.isNaN (slide 55)
    if (nom === "" || prenom === "" || Number.isNaN(parseInt(points)) || points === "") {
        // Boîte de dialogue d'alerte avec window.alert (slide 34)
        window.alert("Formulaire incomplet !");
    } else {
        // Ajout d'un élément dans un tableau avec push() (slide 40)
        persons.push({ nom: nom, prenom: prenom, points: parseInt(points) });
        
        doInsert(nom, prenom, parseInt(points));

        // Réinitialisation des champs par identifiant (slide 61)
        document.getElementById("input_nom").value = "";
        document.getElementById("input_prenom").value = "";
        document.getElementById("input_points").value = "";
    }
}

// Déclaration de la fonction (slide 45)
function logTableToConsole() {
    // Affichage sous forme de tableau dans la console (slide 33)
    console.table(persons);
}

/* extra functions */

// Ajout d'un écouteur d'événement "change" avec addEventListener (slide 136)
document.getElementById("select_all").addEventListener("change", function(event) {
    // Récupération de l'élément cible de l'événement avec event.target (slide XX)
    const rowCheckboxes = document.querySelectorAll("#table_container table tr .col_checkbox input[type='checkbox']");
    // Utilisation de la méthode forEach pour parcourir un tableau (slide 44)
    rowCheckboxes.forEach(cb => {
        // Modification de la propriété checked (slide 86)
        cb.checked = event.target.checked;
    });
});

// Déclaration de la fonction (slide 45)
function deleteAllRows() {
    if (lignes === 0) {
        window.alert("Le tableau est déjà vide.");
        return;
    }
    // Boîte de dialogue de confirmation avec window.confirm (slide 35)
    if (window.confirm("Voulez-vous vraiment supprimer TOUTES les lignes ?")) {
        const rows = document.querySelectorAll("#table_container table tr");
        // Boucle for (slide 44)
        for (let i = rows.length - 1; i > 0; i--) {
            // Suppression d'un élément du DOM avec remove() (slide 86)
            rows[i].remove();
        }
        lignes = 0;
        // Modification de la propriété length d'un tableau (slide 40)
        persons.length = 0;
        updateSummary();
    }
}

// Ajout d'écouteurs d'événements "click" avec addEventListener (slide 136)
document.getElementById("btn_delete_all").addEventListener("click", deleteAllRows);
document.getElementById("btn_ajouter").addEventListener("click", doNewData);
document.getElementById("btn_supprimer").addEventListener("click", deleteRow);
document.getElementById("btn_consol").addEventListener("click", logTableToConsole);

// Appel de la fonction d'initialisation (slide 45)
init();