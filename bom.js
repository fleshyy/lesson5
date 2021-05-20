const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('.list');

button.addEventListener('click', () => {
    // all of our code will go here

    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = input.value;
    input.value = "";
    input.focus();
    deletebutton.textContent = "❌";
    li.append(deletebutton);
    ul.append(li);
    deletebutton.addEventListener('click', function () {
        ul.removeChild(li)
        input.focus();
    });
});

