let leInput = document.querySelector('input');
let leButton = document.querySelector('button');
let laList = document.querySelector('ul');

leButton.addEventListener("click", ajouterTask);
function ajouterTask() {
    let task = document.createElement('li');
    task.textContent = leInput.value;
    laList.append(task);
}