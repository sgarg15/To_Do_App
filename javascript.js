let itemArray = [];

let input = document.getElementById('insideTitle');

document.addEventListener('keypress', function (e) {
    let key = e.keyCode;
    if (key === 13) { // 13 is enter
      addToDOM();
    }
});

function addToDOM() {
  itemArray.push(input.value);
  console.log(itemArray);

  let item = document.createElement('h3');
  let itemListing = document.getElementById('itemList')
  let insideTitle = document.getElementById('insideTitle');
  item.innerHTML = input.value;
  item.setAttribute('class', 'todoItems');
  itemListing.prepend(item);
  input.value = "";
}
