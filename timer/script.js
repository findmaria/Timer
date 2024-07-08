function getHourSecond(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })

}

const relogio = document.querySelector('#timer')
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')

let segundos = 0
let timer;

function startClock(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getHourSecond(segundos)
    }, 1000)
} 

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    startClock()
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
    clearInterval(timer)
})

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
})


