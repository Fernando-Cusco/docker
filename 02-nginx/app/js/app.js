'use strict'

const change =  document.querySelector('.btn')
const btnp = document.querySelector('.print')
change.addEventListener('click', ()=> {

    var id = document.getElementById('hola').innerHTML
    if (id == 'Hola Mundo') {
        document.getElementById('hola').innerHTML = "Hello World"
    } else {
        document.getElementById('hola').innerHTML = "Hola Mundo"
    }
})

btnp.addEventListener('click', ()=> {
    print(document.getElementById('hola').innerHTML)
})


// 