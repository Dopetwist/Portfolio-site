import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const ScrollWrapper = () => {
    useEffect(() => {
        ScrollReveal().reveal('#main-name', {
            distance: '5rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'left',
            delay: 100,
            reset: true
        }),
        ScrollReveal().reveal('.home-text', {
            distance: '10rem',
            duration: 2000,
            easing: 'ease-in-out',
            origin: 'right',
            delay: 100,
            reset: true
        }),
        ScrollReveal().reveal('#about-img', {
            distance: '5rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'top',
            delay: 100
        }),
        ScrollReveal().reveal('.about-sub', {
            distance: '5rem',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 500
        }),
        ScrollReveal().reveal('#portfolio, .explore, #skill .heading, #get-in-touch', {
            distance: '3rem',
            duration: 1300,
            easing: 'ease-in-out',
            origin: 'top',
            delay: 100
        }),
        ScrollReveal().reveal('.project-container, .skill-text p', {
            distance: '5rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 1000
        }),
        ScrollReveal().reveal('.sub-con', {
            distance: '7rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 1700
        }),
        ScrollReveal().reveal('.soft-skills', { 
            distance: '5rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'right',
            delay: 2000
        }),
        ScrollReveal().reveal('#footer p, .socials', {
            distance: '3rem',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 200
        })
    }, []);
}

export default ScrollWrapper;