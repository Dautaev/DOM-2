const ul = document.createElement('ul')
ul.className = 'list'
const li = document.createElement('li')
li.textContent = 'привет мир'
li.append(ul)
console.log(ul)
console.log(li)