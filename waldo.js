/*		TODO LIST: 	 Features
============================================================
	1) 		Automate Targets ... 1,000 trials instead of 3x?
	2)		Improve Game play:  Fade In/Out transitions?
	3) 		Count down the number of remaining tests
	4) 		Closing minigame will save your progress?
	5) 		Allow user to skip a trial?
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
	count-=1;
	points.dataset.counter = count
	points.style.backgroundColor = color
	points.innerHTML = count
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
    show('second_target')
    playSound('Success Sound')
    hide('first_target')
}

/*		Execute Controller Functions
============================================================
		We want to execute them when the user clicks,
		not when the page loads.
============================================================
*/
let first = document.getElementById('first_target')
first.onclick = firstComplete
