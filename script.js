const container = document.querySelector('.mainContainer')

for (let i = 0; i <= 255; i++ ) {
  const div = document.createElement('div')
  div.classList.add('gridSection')
  container.appendChild(div)
}

// Add color when hover .gridSection

const gridSection = document.querySelectorAll('.gridSection')


gridSection.forEach (function (item, index) {
  item.addEventListener('mouseover', function addColor () {
      item.classList.add('active')
  })
});