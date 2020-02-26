var item = {
    name: '',
    done: false,
}



!localStorage.getItem('list') && localStorage.setItem('list', JSON.stringify([])) 

loadItems();

function markItem () {
    this.parentElement.querySelector('.checkMark').classList.toggle('active');
    
    setTimeout(200, () => {
        // TODO adicionar chanfrado e sumir com item
    })
}

function addItem (event) {

    event.preventDefault();

    const newItemName = document.getElementsByName('newItem')[0].value;
    const newItem = Object.create(item);
    newItem.name = newItemName;
    newItem.done = false;

    let items = localStorage.getItem('list');
    items = JSON.parse(items);

    localStorage.setItem('list', JSON.stringify([...items, newItem]));

    addItemElement(newItem);

    document.getElementsByName('newItem')[0].value = '';
}

function addItemElement (item) {

    const newItem = document.createElement('li');
    newItem.innerHTML =
    `<div class="checkBox">
            <div class="round"></div>
            <div class="checkMark ${item.done && 'active'}"></div>
        </div>
        <div>
            <h3>
               ${item.name}
            </h3>
            <p>
                ${2} unidade(s)
            </p>
        </div>`;

    newItem.querySelector('.checkBox .round').addEventListener('click', markItem);

    document.getElementById('list').appendChild(newItem);

}


function loadItems () {
    let items = localStorage.getItem('list');
    items = JSON.parse(items);

    items.forEach(item => addItemElement(item));
}

// function clearInput () {

// }