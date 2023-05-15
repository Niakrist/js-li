const lists = [11111, 22222, 33333, 44444, 55555, 66666];
const ul = document.querySelector('ul');
const btn = document.querySelector('.button');

for (let i = 0; i < lists.length; i++) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.textContent = lists[i];
  ul.appendChild(li);

  li.addEventListener('click', changeText)

  deleteLink(li);
  addLineLink(li);
}

btn.addEventListener('click', function() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.textContent = String(ul .children.length + 1).repeat(5);
  ul.appendChild(li);
  li.addEventListener('click', changeText)

  deleteLink(li);
  addLineLink(li);
})

function changeText(e) {
  if (!e.target.matches('a')) {
    const self = this;
    const spanText = self.querySelector('span');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = spanText.textContent;
    spanText.textContent = ''
    spanText.append(input);
    input.focus();
    self.classList.add('change-test')
    spanText.classList.add('active-span')
    input.addEventListener('blur', function() {
      self.classList.remove('change-test')
      spanText.classList.remove('active-span')
      spanText.textContent = input.value;
    })
  }
}

function clickDelLink(e) {
  e.preventDefault();
  const parent = this.parentElement;
  parent.className = 'delete';
  setTimeout(function() {
    parent.remove()
  }, 300)
}

function clickLineLink(e) {
  e.preventDefault();
  const parent = this.parentElement;
  const spantext = parent.querySelector('span');
  parent.classList.toggle('line-link-bgcolor')

  spantext.classList.toggle('text-decor')
  this.textContent = spantext.className === 'text-decor' ? 'Отменить' : 'Зачеркнуть';
}

function deleteLink(li) {
  const delLink = document.createElement('a');
  delLink.href = '#';
  delLink.textContent = 'Удалить';
  delLink.className = 'delLink'
  li.insertAdjacentElement('beforeend', delLink);
  delLink.addEventListener('click', clickDelLink)
}

function addLineLink(li) {
  const lineLink = document.createElement('a');
  lineLink.href = '#';
  lineLink.textContent = 'Зачеркнуть';
  lineLink.className = 'line-link';
  li.insertAdjacentElement('beforeend', lineLink);
  lineLink.addEventListener('click', clickLineLink)
}