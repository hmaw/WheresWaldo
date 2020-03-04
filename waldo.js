/*		TODO LIST: 	 Features
============================================================
	❌ 		Automate Targets ... 1,000 trials instead of 3x?
	❌		Improve Game play:  Fade In/Out transitions?
	❌ 		Count down the number of remaining tests
	❌ 		Closing minigame will save your progress?
	❌ 		Allow user to skip a trial?
	❌ 		Game screen is  larger than viewport
	❌ 		Game screen is draggable
	✅		Add Game screen and icon placeholder image
============================================================
*/


/*		Close Minigame
============================================================
		TODO: save game progress before you exit
============================================================
*/
function closeGame () {
    alert("You are closing the page!")
    return false;
}
let closeButton = document.getElementById('closeButton')
closeButton.onclick = closeGame


/*		Setup Helper Functions
============================================================
		These are the VERBS --> The specific things your script can do
		EXAMPLE:
			Show, Hide
			Play a Sound, 	Increment Counter
============================================================
*/
function incrementCounter (color) {
    let points = document.getElementById('points')
	let count = Number( points.dataset.counter )
	count = !color ? 0 : count - 1
	points.dataset.counter = count
	points.style.backgroundColor = color
	points.innerHTML = count
}
function changeIcon (img) {
	let icon = document.getElementById("indicator")
	icon.style.backgroundImage = `url(images/${img})`
}
function show (target) {
    let nextTarget = document.getElementById(target)
    nextTarget.style.display = "block"
}

function hide (target) {
    let nextTarget = document.getElementById(target)
    nextTarget.style.display = "none"
}

function playSound (sound) {
    alert(`Playing sound : ${sound} ... progress to next step`)
}



/*		Controller Functions
============================================================
		These are the applications of our basic actions
============================================================
*/
function firstComplete(){
    incrementCounter('gold')
	changeIcon('placeholder_icon_02.png')
    show('second_target')
    playSound('SUCCES MUSIC')
    hide('first_target')
}
function secondComplete(){
    incrementCounter('cyan')
	changeIcon('placeholder_icon_03.png')
    show('third_target')
    playSound('YOUR ON FIRE!!')
    hide('second_target')
}
function thirdComplete(){
    incrementCounter(null)
	changeIcon('none')
    // show('')
    playSound('DONE')
    hide('third_target')
	closeGame()
}
/*		Execute Controller Functions
============================================================
		We want to execute them when the user clicks,
		not when the page loads.
============================================================
*/
let first = document.getElementById('first_target')
let second = document.getElementById('second_target')
let third = document.getElementById('third_target')
first.onclick = firstComplete
second.onclick = secondComplete
third.onclick = thirdComplete
