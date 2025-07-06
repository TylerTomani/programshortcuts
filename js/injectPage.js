import { letterFocus } from "./letterFocus.js";
import { stepFocus } from "../videos-page/js/step-focus.js";
import { playVids } from "../videos-page/js/play-vid.js";

export const sideBarLinks = document.querySelectorAll('.side-bar > .side-bar-ul-container li a');
export const mainLandingPage = document.querySelector('.main-landing-page');

let lastPageClicked;
let clickedLink = false;

// Handle target="_blank" links globally
document.querySelectorAll('a').forEach(a => {
    if (a.hasAttribute('target')) {
        a.addEventListener('click', e => {
            window.open(e.target.href, '_blank');
        });
    }
});


// Initial load if link has autofocus
sideBarLinks.forEach(link => {
    if (link.hasAttribute('autofocus')) {
        fetchHtml(link.href);
    }

    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();

        clickedLink = true;
        const anchor = e.target.closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('http')) return;

        fetchHtml(href);
    });

    link.addEventListener('keydown', e => {
        const key = e.key.toLowerCase();
        if (e.target.hasAttribute('target')) return;

        if (key === 'enter') {
            clickedLink = true;
            const href = e.target.getAttribute('href');
            if (href) {
                letterFocus();
                fetchHtml(href);
            }
        }
        lastPageClicked = e.target;
    });
});

// Main fetchHtml function with head/script/style injection
export async function fetchHtml(href) {
    if (!href) return;

    try {
        const response = await fetch(href);
        const htmlText = await response.text();

        // Parse the fetched HTML into a DOM
        const temp = document.createElement('html');
        temp.innerHTML = htmlText;

        // 🧹 Remove CSP meta tags that are misplaced
        temp.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(meta => meta.remove());

        const headContent = temp.querySelector('head');
        const bodyContent = temp.querySelector('body');

        injectHeadResources(headContent);

        mainLandingPage.innerHTML = '';
        if (bodyContent) {
            mainLandingPage.append(...bodyContent.childNodes);
        } else {
            // fallback for fragment-based html
            mainLandingPage.innerHTML = temp.innerHTML;
        }

        const aLinks = mainLandingPage.querySelectorAll('.page-container a');
        openPageLinks(aLinks);

        stepFocus();
        playVids();
        letterFocus();
    } catch (err) {
        console.error('Failed to fetch or inject page:', err);
    }
}


// Injects styles and scripts from <head>
function injectHeadResources(head) {
    if (!head) return;

    // Inject stylesheets
    head.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[href="${href}"]`)) {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = href;
            document.head.appendChild(newLink);
        }
    });

    // Inject scripts
    head.querySelectorAll('script[src]').forEach(script => {
        const src = script.getAttribute('src');
        if (src && !document.querySelector(`script[src="${src}"]`)) {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.defer = script.defer || false;
            document.body.appendChild(newScript);
        }
    });
}

// Hook up internal links inside injected pages
function openPageLinks(aLinks) {
    aLinks.forEach(link => {
        if (link.hasAttribute('autofocus') && !clickedLink) {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http')) {
                fetchHtml(href);
            }
        }

        link.addEventListener('click', e => {
            e.preventDefault();
            const anchor = e.target.closest('a');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (href && !href.startsWith('http')) {
                fetchHtml(href);
            }
        });
    });
}
addEventListener('click', e => {
    console.log(e.target)
});