let id = 0

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("employee-name").value;
    row.insertCell(1).innerHTML = document.getElementById('birthday').value;
    row.insertCell(2).innerHTML = document.getElementById("Favorite-cake-flavor").value;
    // row.insertCell(3).innerHTML = document.getElementById("allergies").value;

    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('employee-name').value = ``;
    document.getElementById('birthday').value = ``;
    document.getElementById("Favorite-cake-flavor").value = ``;
    // document.getElementById('allergies').radioChecked = false
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}