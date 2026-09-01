import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const ScrollWrapper = () => {
    useEffect(() => {
        ScrollReveal().reveal('#main-name', {
            distance: '4rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'left',
            delay: 100
        }),
        ScrollReveal().reveal('.home-text', {
            distance: '9rem',
            duration: 2000,
            easing: 'ease-in-out',
            origin: 'right',
            delay: 100
        }),
        ScrollReveal().reveal('#about-img', {
            distance: '4rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'top',
            delay: 100
        }),
        ScrollReveal().reveal('.about-sub', {
            distance: '4rem',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 500
        }),
        ScrollReveal().reveal('#portfolio, .explore, #skill .heading, #get-in-touch', {
            distance: '2rem',
            duration: 1300,
            easing: 'ease-in-out',
            origin: 'top',
            delay: 100
        }),
        ScrollReveal().reveal('.project-container', {
            distance: '4rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 1000
        }),
        ScrollReveal().reveal('.sub-con', {
            distance: '4rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 1700
        }),
        ScrollReveal().reveal('.soft-skills', { 
            distance: '3rem',
            duration: 1500,
            easing: 'ease-in-out',
            origin: 'right',
            delay: 2000
        }),
        ScrollReveal().reveal('#footer p, .socials', {
            distance: '2rem',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 200
        })
    }, []);
}

export default ScrollWrapper;