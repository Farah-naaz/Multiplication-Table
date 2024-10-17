let result = document.querySelector('.result')

let input = document.querySelector('input')
input.style = "background: skyblue;"
let button = document.querySelector('button')
button.style = "color:white; background: black;"

button.addEventListener('click', ()=>{
button.style = "color:yellow; background: orange;"
result.style = "color:purple; background: violet;"
input.style = "background: yellow;"   
result.innerHTML = ''

for(let i=1; i<11; i++){

result.innerHTML += input.value + ' x ' + i + " = " + input.value*i + '<br>'

}



})





