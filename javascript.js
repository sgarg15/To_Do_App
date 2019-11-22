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

  let item = document.createElement('h2');
  item.innerHTML = input.value;
  document.body.appendChild(item);
  input.value = "";
}
