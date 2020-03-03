let closeButton = document.getElementById('closeButton')
closeButton.onclick = closeGame

function closeGame(){
    alert("You are closing the page!")
    return false;
}

let first = document.getElementById('first_target')
first.onclick = firstComplete

function firstComplete(){
    updateIcon('orange')
    show('second_target')
    playSound('Birds Chirping')
    hide('first_target') 
}

function updateIcon(color){
    let icon = document.getElementById('icon')
    icon.style.backgroundColor = color
    
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