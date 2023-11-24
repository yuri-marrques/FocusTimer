import state from "./state.js"
import * as el from './elements.js'
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown(){
    
    clearTimeout(state.countdownId)
    
    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    
    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdown = IdsetTimeout(()=> countdown(), 1000)
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes // ?? verifica se o valor é nulo
    seconds = seconds ?? state.seconds //se for nulo ira utilizar o valor do states

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}