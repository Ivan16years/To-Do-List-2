let addBtn = document.createElement('#addBtn');
let taskInput = document.querySelector('#taskInput');

addBtn.addEventListener('click', function (evt) {
    let li = document.createElement('li');
    li.classList.add('item');
    li.textContent = taskInput;
    li.append(evt);
})