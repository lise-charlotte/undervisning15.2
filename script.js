const input = document.querySelector('#input');
const parent = document.querySelector('#main');

function createNewNode = (htmlTag, tekst, parent) {
  const newElement = document.createElement(htmlTag);
  newElement.textContent = tekst;
  parent.appendChild(newElement);
}

function addElement(event) {
  if (event.key === 'Enter') {
    createNewNode('h3', 'Dette er en H3', parent)
  }
}

input.addEventListener('keydown', addElement);
