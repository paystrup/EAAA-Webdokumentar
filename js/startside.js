// registrer gsap scrolltrigger
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// GSAP til animationer på frontsiden når den genindlæses
// her defineres gsap timeline og globale settings
let tl = gsap.timeline({defaults: {ease: "power3.inOut", duration: 0.2}})

// animation af clippaths, opacity etc. så elementet vises, CTA kommer forskudt
tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
tl.to('.landingh3', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 0.4})
tl.to('.secondaryBtn', { opacity: 1, y: 0, duration: 0.4})
tl.to('.landingImg', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 0.7})

// 3d transform effect startside
!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 2,
		screenHeight = $win.screen.height / 2,
		$elems = $doc.getElementsByClassName("elem"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}

	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.04,
			degY = centroY * 0.02,
			$elem

		for (var i = 0; i < $elems.length; i++) {
   			$elem = $elems[i];
			$elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	});
})(document, window);

// mouse follower med gsap
gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // hastighed til andre skærme
  const dt = 1 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});


