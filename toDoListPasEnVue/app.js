// Récupération des éléments
let leInput = document.querySelector('input');
let leButton = document.querySelector('button');
let laList = document.querySelector('ul');

// Appel de la fonction lors d'un click du bouton Ajouter
leButton.addEventListener("click", ajouterTask);

function ajouterTask() {
    // Création de l'élément li
    let task = document.createElement('li');
    // Ajout de la valeur de l'input dans la task
    task.textContent = leInput.value;
    // Ajout de la task dans la liste
    laList.append(task);
    // Clean la barre d'input
    leInput.value = "";
}