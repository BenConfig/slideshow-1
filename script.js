const SLIDE = document.querySelectorAll('.slide');
const BTN_PREVIOUS = document.getElementById('prev');
const BTN_NEXT = document.getElementById('next');

let viewport = 'mobile';

function updateImgSrc() {
    for (let i = 0; i < SLIDE.length; i++) {
       SLIDE[i].src = `images/img${i + 1}-${viewport}.jpeg`;
    }
};

const mediaQuery = window.matchMedia('(min-width: 31.25em)')

function updateViewportVariable(e) {
    viewport = e.matches ? 'desktop' : 'mobile';
    updateImgSrc();
};

// Register event listener
mediaQuery.addListener(updateViewportVariable);

// Initial check
updateViewportVariable(mediaQuery);

let isAnimating = false;

BTN_PREVIOUS.addEventListener('click', function() {

    for (let i = 0; i < SLIDE.length; i++) {
        

        if (SLIDE[i].classList.contains('featured')) {
            if (isAnimating) return;
            isAnimating = true;

            SLIDE[i].classList.remove('featured');
            SLIDE[i === 0 ? SLIDE.length - 1 : i - 1].classList.add('featured');
            
            setTimeout(() => isAnimating = false, 500);
            
            return;  
        }
    }

    
})

BTN_NEXT.addEventListener('click', function() {
    for (let i = 0; i < SLIDE.length; i++) {
        if (SLIDE[i].classList.contains('featured')) {
            SLIDE[i].classList.remove('featured');
            SLIDE[i === SLIDE.length - 1 ? 0 : i + 1].classList.add('featured');
            return;
        }
    }
})