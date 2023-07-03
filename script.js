const container = document.querySelector('.mainContainer')

for (let i = 0; i <= 255; i++ ) {
  const div = document.createElement('div')
  div.classList.add('gridSection')
  container.appendChild(div)
}

