window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const circle = document.querySelector('.circle');
    const overlay = document.querySelector('.overlay');
    const toggle = document.querySelector('[data-toggle-dark-mode]');
    let left = 0;
    let top = 0;

    if (window.matchMedia) {
        if (toggle) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                body.classList.add('is-dark');
            } else {
                body.classList.remove('is-dark');
            }
            toggle.addEventListener('mouseup', () => {
                body.classList.toggle('is-dark');
            });
        }

        if (window.matchMedia('(pointer:fine)').matches) {
            document.addEventListener('mousemove', event => {
                left = 50 + event.pageX;
                top = 50 + event.pageY;
            });
    
            window.requestAnimationFrame(function animation() {
                circle.style.transform = `translate(${left}px, ${top}px)`;
    
                window.requestAnimationFrame(animation);
            });
    
            body.classList.remove('opacity-0');
            circle.removeAttribute('hidden');
        } else {
            body.classList.add('no-pointer');
            circle.remove();
            overlay.remove();
        }
    } else {
        toggle.remove();
        circle.remove();
        overlay.remove();
        body.classList.remove('opacity-0');
    }
});