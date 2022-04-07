// Menupunkter til åben menum loades i hver html-fil
menuUL.innerHTML = `
    <li class="menulink">
        <a href="https://www.eaaa.dk/">Læs om vores uddannelser</a>
    </li>

    <li class="menulink">
        <a href="https://www.eaaa.dk/">Historier fra vores studerende</a>
    </li>

    <li class="menulink">
        <a href="https://www.eaaa.dk/">Gå til vores hjemmeside</a>
    </li>
`

// navbar logo onclick href til index, dynamisk link
navLogo.addEventListener('click', function(){
    location.href = 'index.html'
  })

// åben menu med burger onclick, afspil animationer
hamburgermenu.addEventListener('click', function(){
    openMenu.style.display = "block";
    gsap.to('.menulink', { y: 0, opacity: 1, delay: 0.2, duration: 1, stagger: 0.2})
})

// luk menu igen + reset GSAP animationer
closeMenuIcon.addEventListener('click', function(){
    openMenu.style.display = "none";
    gsap.to('.menulink', { y: 100, opacity: 0, duration: 1})
})

// animationer til navbar på load
gsap.to('.navlogo', { y: 0, opacity: 1, y: 0, duration: 1})
gsap.to('.navicons', { y: 0, opacity: 1, y: 0, duration: 1, delay: 0.5})


// mute funktion til muteknap, pause eller mute elem
// inspiration https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js 
function muteMe(elem) {
    elem.muted = true;
}

function mutePage() {
    var elems = document.querySelectorAll("audio");
    [].forEach.call(elems, function(elem) { muteMe(elem); }); 
    // forloop igennem alle elementer og brug muteMe 
    //function på alle audio elementer
}

function unmuteMe(elem) {
    elem.muted = false;
}

function unmutePage() {
    var elems = document.querySelectorAll("audio");
    [].forEach.call(elems, function(elem) { unmuteMe(elem); });
    // forloop igennem alle elementer og brug unmuteMe 
    //function på alle audio elementer
}

// Mute og unmute funktion til ikon i navbar, her skiftes ikonet når der klikkes med display styling
muteknap.addEventListener('click', function(){
    mutePage(); // mute audio
    muteknap.style.display = "none";
    unmuteknap.style.display = "block";
})

unmuteknap.addEventListener('click', function(){
    unmutePage(); // unmute audio
    unmuteknap.style.display = "none";
    muteknap.style.display = "block";
})
