const div1 = document.createElement('div1')
const div2 = document.createElement('div2')
const div3 = document.createElement('div3')

div1.className = 'red'
div2.className = 'green'
div3.className = 'blue'

div3.textContent = 'я вложен'

div2.append(div3)
div1.append(div2)
console.log(div1)
