/**
 * Genesis Artifact 02 - Interaction Scripts
 * Implements subtle fade-in on scroll using Intersection Observer.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Setup Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element comes into view
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visibility class to trigger CSS transition
                entry.target.classList.add('is-visible');
                // Stop observing once animated to prevent repeating
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the .fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Clone marquee content for seamless infinite scrolling effect
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        const content = marqueeTrack.innerHTML;
        // Duplicate content a few times to ensure it covers wide screens
        marqueeTrack.innerHTML = content + content + content;
    }
});