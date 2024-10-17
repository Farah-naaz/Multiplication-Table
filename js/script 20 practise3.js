let result = document.querySelector('.result')
let input = document.querySelector('input')
let button = document.querySelector('button')


button.addEventListener('click', ()=>{

result.innerHTML = ''

for(let i=1; i<11; i++){

result.innerHTML += input.value + ' x ' + i + " = " + input.value*i + '<br>'
}
})