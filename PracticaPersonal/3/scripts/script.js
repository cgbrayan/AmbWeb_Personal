const menuIcon = document.getElementById('menuIcon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
navbar.classList.toggle('active');
});

window.onload = function() {
    // Animation for the .board element
     
     gsap.to(".board", {
        duration: 1.5,// Animation duration of 1.5 seconds
        x: 0,// Move Horizontally to its original position
        y: 0, // Move Vertically to its original position
        opacity: 1, // Make it fully visible
        ease: "power2.out", // Smoother easing for a natural feel
        delay: 0.2 // Delay the Start of animation by 0.5 seconda
     });
    
    // Animation for the .burger element
    
      gsap.to(".burger", {
        duration: 3.5,
        y: 0, 
        opacity: 1, 
        ease: "power2.out", 
        delay: 0.2 
     });
      
    // Animation for the hero text (h3)
     
      gsap.to(".hero-text h3", {
        duration: 1.5,
        x: 0, 
        opacity: 1, 
        ease: "power2.out", 
        delay: 0.2 
     });
      
    // Animation for the hero text (h1)
     
       gsap.to(".hero-text h1", {
        duration: 1.5,
        y: 0, 
        opacity: 1, 
        ease: "power2.out", 
        delay: 0.2 
     });
      
    
    // Animation for the hero paragraph
     
       gsap.to(".hero-text p", {
        duration: 1.6,
        x: 0, 
        opacity: 1, 
        ease: "power2.out", 
        delay: 0.2 
     });
      
    
    // Animation for the button
    
        gsap.to(".hero-text .btn", {
        duration: 1.9,
        y: 0, 
        opacity: 1, 
        ease: "power2.out", 
        delay: 0.2 
     });
      
     
    };
    