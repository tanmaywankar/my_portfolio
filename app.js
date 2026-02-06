gsap.registerPlugin(ScrollTrigger);
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

// alert("Site is currently Work in Progress and so a good amount of things are not working");

const heroTl = gsap.timeline();
const mouseTl = gsap.timeline({
    delay: 2,
    onComplete: initHeroParallax
});
const scrollTl = gsap.timeline();


heroTl.from(".heading", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out"
})
.from(".float_icon", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
}, "-=0.5")
gsap.from(".grid1", {
    y: 100,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    stagger: 0.3,
    ease: "power4.out",
     scrollTrigger: {
        trigger: ".Hero", 
        start: "top 20%",       
        toggleActions: "play none none none" 
    }

});

//mouse animation
const heroContainer = document.querySelector(".hero");

function initHeroParallax() {
    heroContainer.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = heroContainer.getBoundingClientRect();
        const xPos = ((e.clientX - left) / width) - 0.5;
        const yPos = ((e.clientY - top) / height) - 0.5;

        gsap.to(".heading", {
            x: xPos * -10, 
            y: yPos * -10,
            duration: 0.6,
            ease: "power2.out"
        });

        gsap.to(".float_icon", {
            x: xPos * -30,
            y: yPos * -30,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    heroContainer.addEventListener("mouseleave", () => {
        gsap.to([".heading", ".float_icon"], {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
    });
}

gsap.from(".grid_item3, .grid_item4, .Status_card, .grid_item5", {
    y: 50,              
    opacity: 0,          
    duration: 1,       
    stagger: 0.3,       
    ease: "power2.out",  
    scrollTrigger: {
        trigger: ".Bento_grid", 
        start: "top 30%",       
        toggleActions: "play none none none" 
    }
});

scrollTl.from(".Skills",
    {
    delay:1.5,
    y: 50,              
    opacity: 0,          
    duration: 1,       
    stagger: 0.1,       
    ease: "power2.out" 
    }
);


    const radius = 40;
    const circumference = 2 * Math.PI * radius; 


gsap.fromTo(".progress-stroke", 
        { strokeDashoffset: circumference }, 
        { 
            strokeDashoffset: (i, target) => {
                const percent = target.getAttribute('data-percent');
                return circumference - (percent / 100) * circumference;
            },
            duration: 1,
            ease: "power2.out",
            stagger: 0.2, 
            delay: 2,
        scrollTrigger: {
        trigger: ".Bento_grid", 
        start: "top 20%",       
        toggleActions: "play none none none" 
    }

        }
    );
