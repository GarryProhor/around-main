new Gallery(document.getElementById('gallery'), {
    margin: 10,
    dots: false
});

/**
 * Burger
 */

const BODY_BURDER_OPENED = 'body_burder-opened';

const bodyNode = document.querySelector('body');
const burgerControlNode = document.querySelector('.burger-menu__control');
const burgerSpaceCoverNode = document.querySelector('.cover-space__burger');

burgerControlNode.addEventListener('click', (_event) => {
    if (bodyNode.classList.contains(BODY_BURDER_OPENED)) {
        bodyNode.classList.remove(BODY_BURDER_OPENED);
    } else {
        bodyNode.classList.add(BODY_BURDER_OPENED);
    }
});

burgerSpaceCoverNode.addEventListener('click', (_event) => {
    bodyNode.classList.remove(BODY_BURDER_OPENED);
});

/**
 * Sticky
 */

const HEADER_SCROLLED_CLASS = 'header_scrolled';
const STICKY_START_SCROLL = 20;
const headerNode = document.querySelector('.header');

toggleBgHeader();
window.addEventListener('scroll', () => {
    toggleBgHeader();
});

function toggleBgHeader() {
    if (
        window.scrollY >= STICKY_START_SCROLL
        && !headerNode.classList.contains(HEADER_SCROLLED_CLASS)
    ) {
        headerNode.classList.add(HEADER_SCROLLED_CLASS);
    } else if (
        window.scrollY < STICKY_START_SCROLL
        && headerNode.classList.contains(HEADER_SCROLLED_CLASS)
    ) {
        headerNode.classList.remove(HEADER_SCROLLED_CLASS);
    }
}

/**
 * Scroll to
 */

const scrollDownButton = document.getElementById('scroll-action');
const scrollToNode = document.getElementById('scroll-to');

let currentScroll = window.scrollY;
let scrollAnimatedId;

scrollDownButton.addEventListener('click', () => {
    stopAnimationScroll();
    currentScroll = window.scrollY;
    startAnimationScroll(scrollToNode.offsetTop - 80);
});

function startAnimationScroll(newScrollY) {
    const defaultScroll = (newScrollY - currentScroll);

    currentScroll += defaultScroll * 0.08;
    window.scrollTo(0, currentScroll);

    if (Math.abs(defaultScroll) > 1) {
        scrollAnimatedId = window.requestAnimationFrame(
            () => startAnimationScroll(newScrollY)
        );
    } else {
        window.scrollTo(0, newScrollY);
        stopAnimationScroll();
    }
}

function stopAnimationScroll() {
    window.cancelAnimationFrame(scrollAnimatedId);
    scrollAnimatedId = undefined;
}