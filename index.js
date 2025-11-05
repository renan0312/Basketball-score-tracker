homesumEl = document.getElementById("sumhome-el")
guestsumEl = document.getElementById("sumguest-el")

let homepoints = 0
homesumEl.textContent = 0
guestsumEl.textContent = homepoints

function homeaddone() {
    homepoints += 1
    homesumEl.textContent = homepoints
}

function homeaddtwo() {
    homepoints += 2
    homesumEl.textContent = homepoints
}

function homeaddthree() {
    homepoints += 3
    homesumEl.textContent = homepoints
}

let guestpoints = 0

function guestaddone() {
    guestpoints += 1
    guestsumEl.textContent = guestpoints
}

function guestaddtwo() {
    guestpoints += 2
    guestsumEl.textContent = guestpoints
}

function guestaddthree() {
    guestpoints += 3
    guestsumEl.textContent = guestpoints
}