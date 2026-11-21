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

// Déclaration de la fonction (slide 45)
function logTableToConsole() {
    // Sélection de plusieurs éléments avec querySelectorAll (slide 76)
    const rows = document.querySelectorAll("#table_container table tr");
    const data = [];
    
    // Boucle for classique (slide 44)
    for (let i = 1; i < rows.length; i++) {
        // Récupération des cellules d'une ligne (slide 76)
        const cells = rows[i].querySelectorAll("td");
        
        // Création d'un objet littéral (slide 39)
        const person = {
            num: cells[0].innerText,
            nom: cells[1].innerText,
            prenom: cells[2].innerText,
            points: cells[3].innerText
        };
        
        data.push(person);
    }
    
    // Affichage sous forme de tableau dans la console (slide 33)
    console.table(data); 
}

// Ajout d'un écouteur d'événement "click" avec addEventListener (slide 136)
document.getElementById("btn_ajouter").addEventListener("click", function() {
    doInsertRowTable(99, "nom", "prenom", 10);
});

// Ajout d'un écouteur d'événement "click" avec addEventListener (slide 136)
document.getElementById("btn_console").addEventListener("click", logTableToConsole);

// Appel de la fonction d'initialisation (slide 45)
init();