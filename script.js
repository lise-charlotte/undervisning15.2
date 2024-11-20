const input = document.querySelector('#input');
const parent = document.querySelector('#main');

function createNewNode(htmlTag, tekst, parent) {
  const newElement = document.createElement(htmlTag);
  newElement.textContent = tekst;
  parent.appendChild(newElement);
}

function addElement(event) {
  if (event.key === 'Enter') {
    createNewNode('h3', input.value, parent);
  } else if (event.key === 'Shift') {
    createNewNode('p', input.value, parent)
  }
}

input.addEventListener('keydown', addElement);
