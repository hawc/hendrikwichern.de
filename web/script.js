function init() {
    const content = {
        digital: [
            'Web Development',
            'Webdesign',
            'Creative Coding',
            'Web Apps',
            'UI & UX',
        ],
        analogue: [
            'Siebdruck',
            'Printdesign',
            'Merchandising',
        ],
    }

    const clickElements = document.querySelectorAll('[data-click]');
    const contentElements = document.querySelectorAll('[data-content]');

    clickElements.forEach((element, index) => {
        let clickIndex = 0;
        element.addEventListener('click', (event) => {
            clickIndex++;
            rotateDescription(event.target, clickIndex);
        });
    });

    function rotateDescription(target, index) {
        const currentContent = content[target.dataset.click];
        const contentTarget = Array.from(contentElements).find(element => element.dataset.content === target.dataset.click);
        contentTarget.innerHTML = currentContent[index % currentContent.length];
    }

    const mailElement = document.querySelector('[data-mail]');
    const headlineElement = document.querySelector('[data-headline]');

    mailElement.addEventListener('click', element => {
        headlineElement.classList.toggle('is-mail');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    init();
});