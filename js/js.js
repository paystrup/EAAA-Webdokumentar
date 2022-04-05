// registrer GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

// navbar logo onclick href til index, dynamisk link
navLogo.addEventListener('click', function(){
  location.href = 'index.html'
})

// scroll progressbar
// inspiration https://www.w3schools.com/howto/howto_js_scroll_indicator.asp 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// disse 4 linjer er ikke brugt pt. i færdig prototype
// vis headphoneson animation og skjul efter video er færdig
// setTimeout(function () {
//     headPhonesOn.style.display = "none";
// }, 6000); 

// GSAP animationer til story.html hero, her er brugt timeline, så de animeres sammen
let tlstory = new gsap.timeline({defaults: {ease: "power3.inOut", duration: 0.2}})

tlstory.to('.computerstoryh5', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
tlstory.to('.computerstoryp', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 0.4})
tlstory.to('#computerVideo', { y: 0, opacity: 1, duration: 1})
tlstory.to('#scrollIndicator', { y: 0, opacity: 0.5, duration: 1})

// GSAP ANIMATIONER
// generelt har vi brugt to animationer, hvor endelig styling er defineret i JS
// fx fra 0 opacity i css til 1 opacity skrevet her i JS

gsap.to('#flightStoryPic1', {
    scrollTrigger: {
      trigger: '#computerVidBox',
      start: 'top top',
      end: '+=500',
      scrub: true
    },
    opacity: 1,
    y: -50,
    filter:"blur(0px)"
});

gsap.to('.palmer', {
    scrollTrigger: {
      trigger: '.surfingbox',
      start: 'top top',
      toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 2
});

gsap.to('#officeStory', {
  scrollTrigger: {
    trigger: '#kontorbox',
    start: '+=175',
    toggleActions: "play none reverse reverse"
  },
  opacity: 0,
  duration: 1
});

// animationer office story
gsap.to('#officeStoryTextBox', {
  scrollTrigger: {
    trigger: '.surfingbox',
    start: 'center',
    end: 'bottom',
    scrub: true
  },
  opacity: 1
});

gsap.to('#kontorPic', {
  scrollTrigger: {
    trigger: '#officeStoryText',
    toggleActions: "restart none none none"
  },
  opacity: 1,
  duration: 4,
  filter:"blur(0px)"
});

gsap.to('#barndomText', {
  scrollTrigger: {
    trigger: '#kontorPic',
    start: 'top top',
    end: '+=400',
    scrub: true
  },
  scale: "1",
  opacity: 1
});

gsap.to('#sabbataarText', {
  scrollTrigger: {
    trigger: '.fortid2',
    start: 'top top',
    end: '+=400',
    scrub: true
  },
  scale: "1",
  opacity: 1
});

gsap.to('#efterSabbataarText', {
  scrollTrigger: {
    trigger: '.fortid3',
    start: 'top top',
    end: '+=400',
    scrub: true
  },
  scale: "1",
  opacity: 1
});

gsap.to('#flightStoryPic2', {
  scrollTrigger: {
    trigger: '#barndom',
    start: 'top top',
    end: '+=650',
    scrub: true
  },
  opacity: 1,
  y: -50,
  filter:"blur(0px)"
});

gsap.to('#Lag_1', {
  scrollTrigger: {
    trigger: '#kortsection',
    start: 'top top',
    end: '+=900',
    scrub: true
  },
  'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
})

gsap.to('#kortbox', {
  scrollTrigger: {
    trigger: '#kortsection',
    start: 'center',
    end: '+=800',
    scrub: true
  },
  opacity: 0
})

gsap.to('#kortbillede', {
  ease: Expo.easeOut,
  scrollTrigger: {
    trigger: '#kortsection',
    toggleActions: "restart none none none"
  },
  opacity: 1,
  duration: 3,
  scale: "1"
});

gsap.to('#paths3', {
  scrollTrigger: {
    trigger: '#thinking',
    start: 'top top',
    end: 'bottom',
    scrub: true
  },
  rotate: "-60"
});

gsap.to('#paths2', {
  scrollTrigger: {
    trigger: '#gallerisabbat',
    start: 'bottom',
    end: '+=1000',
    scrub: true
  },
  rotate: "200"
});

gsap.to('#paths1', {
  scrollTrigger: {
    trigger: '#gallerisabbat',
    start: 'bottom',
    end: '+=1000',
    scrub: true
  },
  rotate: "120"
});

gsap.to('#bygningBillede', {
  ease: Expo.easeOut,
  scrollTrigger: {
    trigger: '#efterSabbataarText',
    start: 'top top',
    end: '+=500',
    scrub: true
  },
  opacity: 0
});

gsap.to('#flyBillede', {
  ease: Expo.easeOut,
  scrollTrigger: {
    trigger: '#efterSabbataarText',
    start: 'top top',
    end: '+=500',
    scrub: true
  },
  opacity: 1
});

gsap.to('#promotext', {
  ease: Expo.easeOut,
  scrollTrigger: {
    trigger: '#promoheader',
    toggleActions: "restart none restart restart"
  },
  y: 0,
  duration: 3,
  opacity: 1
});

gsap.to('#promologo', {
  ease: Expo.easeOut,
  scrollTrigger: {
    trigger: '#promoeaaa',
    toggleActions: "restart none none restart"
  },
  y: 0,
  duration: 3,
  opacity: 1
});

// mouse follower med gsap, brug af quicksetter
gsap.set(".ball", {xPercent: -50, yPercent: -50}); // set div i midten af skærmen

const ball = document.querySelector(".ball"); 
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // igen i midten af skærmen
const mouse = { x: pos.x, y: pos.y }; 
const speed = 0.35;

// brug quicksetter til at sætte ball div på musens position
const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // skærme med anden refreshrate
  const dt = 1 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// mouse follow hover animation og styling til computerlink i toppen
computerVidBox.addEventListener('mouseenter', function(){
   ball.style.backgroundColor = "var(--black)";
   ball.style.borderRadius = "50px";
   ball.style.border = "2px solid var(--red)";
   ball.style.outline = "none";
   ball.style.width = "70px";
   ball.style.height = "70px";
   klikmig.style.display = "block";
   ball.style.mixBlendMode = "normal";
   gsap.to('#klikmig', { opacity: 1, duration: 2})
})

computerVidBox.addEventListener('mouseleave', function(){
  // ball.style.backgroundColor = "#FFF9E4";
  ball.style.width = "15px";
  ball.style.height = "15px";
  ball.style.outline = "1px solid var(--beige)";
  ball.style.border = "none";
  klikmig.style.display = "none";
  ball.style.mixBlendMode = "exclusion";
  gsap.to('#klikmig', { opacity: 0, duration: 2})
})

// klik computervideo og åbn olivers portfolio link
computerVidBox.addEventListener('click', function(){
  window.open('https://www.olimichelsen.dk/work','_blank');
})

// Kort over rejser fra sabbataar
// interaktivt kort med Mapbox
//Concerning token & style
const token = "pk.eyJ1Ijoia2Fyb2xpbmVhYWJ5IiwiYSI6ImNsMHFlY2xhODI5NzEzZnFrbzB6Nzhwb2IifQ.yRyC01-4DeWoifSLBpA-Ng"
const mapStyle = "mapbox://styles/karolineaaby/cl1dpz0e0001i14o8vwhamqav"
const rejser = "js/rejsersabbataar.geojson"

//Conceerning the map  - koden som henter kortet
mapboxgl.accessToken = token
const map = new mapboxgl.Map({
  container: 'sabbataar-map', // container ID
  style: mapStyle, // style URL
  center: [-37, 25.32], // starting position [lng, lat]
  zoom: 1.6, // starting zoom
  pitch: 0,
  customAttribution: '&copy; Web dokumentar'
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.scrollZoom.disable();

// begynd fetch() her
fetch(rejser).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  //markers
  //den html der skal vises frem (features er punkterne på kortet man har lavet)
  for (let marker in data.features) {

    //tekst til popup box
    let description = `
      <div id="mapDescription">
        <img src="${data.features[marker].properties.billede}" alt="Rejse billeder" style ="width: 200px; height: auto;">
        <h4> ${data.features[marker].properties.overskrift} </h4>
        <p> ${data.features[marker].properties.tekst} </p>
      </div>
    `
        // Popups
        popUp = new mapboxgl.Popup({
          offset: 23
        })
        .setHTML(description)
  
      // Markers
      aMarker = new mapboxgl.Marker({
          color: 'var(--red)',
          size: 'large'  
        })
        .setLngLat(data.features[marker].geometry.coordinates)
        .addTo(map)
        .setPopup(popUp)
  }
})

.catch(err => {
  // Error and description
  console.log('Error: ' + err)
});

// GSAP autoplay galleri (barndom) med draggable plugin
// controls er ikke brugt i endelig version, der kan blot dragges og den kører automatisk
var slideDelay = 1.5;
var slideDuration = 0.3;
var snapX;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");
var progressWrap = gsap.utils.wrap(0, 1);

var numSlides = slides.length;

gsap.set(slides, {
  backgroundColor: "var(--black)",
  xPercent: i => i * 200
});

var wrap = gsap.utils.wrap(-200, (numSlides - 1) * 200);
var timer = gsap.delayedCall(slideDelay, autoPlay);

var animation = gsap.to(slides, {
  xPercent: "+=" + (numSlides * 200),
  duration: 5,
  ease: "none",
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrap
  }
});

var proxy = document.createElement("div");
var slideAnimation = gsap.to({}, {});
var slideWidth = 0;
var wrapWidth = 0;
resize();

var draggable = new Draggable(proxy, {
  trigger: ".slides-container",
  inertia: true,
  onPress: updateDraggable,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: {     
    x: snapX
  }
});

window.addEventListener("resize", resize);

function updateDraggable() {
  timer.restart(true);
  slideAnimation.kill();
  this.update();
}

function animateSlides(direction) {
    
  timer.restart(true);
  slideAnimation.kill();
  
  var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
  
  slideAnimation = gsap.to(proxy, {
    x: x,
    duration: slideDuration,
    onUpdate: updateProgress
  });  
}

function autoPlay() {  
  if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
    timer.restart(true);
  } else {
    animateSlides(-1);
  }
}

function updateProgress() { 
  animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
}

function resize() {
  
  var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;
  
  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  snapX = gsap.utils.snap(slideWidth);
  
  gsap.set(proxy, {
    x: norm * wrapWidth
  });
  
  animateSlides(0);
  slideAnimation.progress(1);
}



