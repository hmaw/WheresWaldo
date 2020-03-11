/*		TODO LIST: 	 Features
===========================================================
    ❌ 		Allow user to skip a trial? Need skip button & data implimented, random pick targets
    ❌ 		Count down the number of remaining tests
    ❌ 		Closing the game page
    ❌       Save your progress? Keeping score or returning once you hit goal?
    ❌ 		Game screen is larger than viewport
    ❌ 		Game screen is draggable
    ✅ 		add sound message on data
    ✅ 		Automate Targets ... 1,000 trials instead of 3x?
    ✅		Add Game screen and icon placeholder image
    ✅		Improve Game play:  Fade In/Out transitions?
============================================================
*/

//Data Array:  img url, location on page in pixels?
let data = [{ 
    img :"placeholder_icon_01.png", 
    location : [null,406,76,null],
    id : "first_target",
    class : "red",
    message: "Good Job! Let's do the next one."
},{
    img :"placeholder_icon_02.png", 
    location : [197,616,null,null],
    id : "second_target",
    class : "gold",
    message: "Great Job!, let's do another."
},{
    img :"placeholder_icon_03.png", 
    location : [null,null,83,170],
    id : "third_target",
    class : "indigo",
    message: "Your amazing! Done!"
}]


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

function playMessage (message) {
    alert(message)
}


/*		Controller Functions
============================================================
		These are the applications of our basic actions
============================================================
*/
function createTarget(current, index, orginalArr){
    let next = null
    let isFinal = false
    let container = document.querySelector(".target")
    let el = document.createElement("li")
    if (index == orginalArr.length - 1){
        isFinal = true
    } else {
        next = orginalArr[index + 1]
    }
    el.setAttribute("id", current.id);
    el.setAttribute("class", current.class);
    el.onclick = function(){
        incrementCounter( isFinal ? null : next.class )
        changeIcon( isFinal ? "none" : next.img)
        playMessage(current.message)
        hide(current.id)
        if (!isFinal){
            show(next.id)   
        } else {
            closeGame()
        }
    }
    container.appendChild(el)
}


/*		Execute Controller Functions
============================================================
		We want to execute them when the user clicks,
		not when the page loads.
============================================================
*/
data.forEach(createTarget)
