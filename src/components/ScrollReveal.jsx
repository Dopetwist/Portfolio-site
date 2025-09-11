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
            delay: 100,
            reset: true
        }),
        ScrollReveal().reveal('.about-sub', {
            distance: '5rem',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            delay: 500,
            reset: true
        })
    }, []);
}

export default ScrollWrapper;