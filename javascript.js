let itemArray = [];
let deleteIcon = '<svg class="delete" fill="#c0cecb" x="0px" y="0px" viewBox="0 0 50 10"><g><g><path class="st0" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"></path></g><g><g><path class="st0" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"></path></g><g><path class="st0" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"></path></g><g><path class="st0" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"></path></g></g></g></svg>'

let input = document.getElementById('insideTitle');

document.addEventListener('keypress', function (e) {
    let key = e.keyCode;
    if (key === 13) { // 13 is enter
      addToDOM();
    }
});

var remove = document.createElement('svg');
remove.innerHTML = deleteIcon;

function removeToDo() {
  console.log(this);
  var item = this.parentNode;
  item.remove();
}

function addToDOM() {
  itemArray.push(input.value);
  console.log(itemArray);

  let item = document.createElement('h3');
  let icon = document.createElement('svg');
  icon.innerHTML = deleteIcon;
  icon.addEventListener('click', removeToDo);
  let itemListing = document.getElementById('itemList');
  let insideTitle = document.getElementById('insideTitle');
  item.innerHTML = input.value;
  item.setAttribute('class', 'todoItems');
  itemListing.prepend(item);
  item.prepend(icon);
  console.log(item.innerHTML);
  input.value = "";
}
