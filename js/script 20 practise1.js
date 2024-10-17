let result = document.querySelector('.result')
let button = document.querySelector('.button')
let result2 = document.querySelector('.result2')
let button2 = document.querySelector ('.button2')

button.addEventListener('click',()=>{

result.innerHTML = 'click click'

console.log('click hocche')

})


button2.addEventListener('click',()=>{
    console.log('this is button 2')
    result2.style = "color:green; background: red;"
})