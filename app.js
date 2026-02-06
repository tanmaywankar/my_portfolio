gsap.registerPlugin(ScrollTrigger);
alert("Site is currently Work in Progress and so a good amount of things are not working");
window.addEventListener('DOMContentLoaded', () => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius; 


    gsap.fromTo(".progress-stroke", 
        { strokeDashoffset: circumference }, 
        { 
            strokeDashoffset: (i, target) => {
                const percent = target.getAttribute('data-percent');
                return circumference - (percent / 100) * circumference;
            },
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2, 
            scrollTrigger: {
                trigger: ".Skills", 
                start: "top 90%",
                toggleActions: "play none none none" 
            }
        }
    );
});