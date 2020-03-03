let closeButton = document.getElementById('closeButton')
closeButton.onclick = closeGame

function closeGame(){
    alert("You are closing the page!")
    return false;
}

let first = document.getElementById('first_target')
first.onclick = firstComplete

function firstComplete(){
    incrementCounter('gold')
    show('second_target')
    playSound('Birds Chirping')
    hide('first_target')
}

function incrementCounter(color){
    let points = document.getElementById('points')
    points.style.backgroundColor = color

}
function show(target){
    let nextTarget = document.getElementById(target)
    nextTarget.style.display = "block"
}

function playSound(sound){
    alert(`Playing sound : ${sound}`)
}

function hide(target){
    let nextTarget = document.getElementById(target)
    nextTarget.style.display = "none"
}

//Going forwards,  make code reusable for multiple colors
//embolish and play and modify nice
//sound/alert
//fade in and out transistions
//counddown of how many left
//skip
//return to root or game?
