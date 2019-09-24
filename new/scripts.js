tippy('[data-tippy-content]', {
    theme: 'hw',
    arrow: true,
    inertia: true,
    size: 'large'
});

let windowWidth = document.querySelector('body').scrollWidth;
let windowHeight = document.querySelector('body').scrollHeight;

document.querySelectorAll('.svgSphere').forEach(element => {
    element.style.filter = 'hue-rotate(' + Math.floor(Math.random() * 360, 1) + 'deg)';
    element.style.transform = 'translate(' + Math.floor(Math.random() * windowWidth, 1) + 'px, ' + Math.floor(Math.random() * windowHeight, 1) + 'px) rotate(' + Math.floor(Math.random() * 360) + 'deg)';
});

let spheres__prongs = {
    'classes': 'svgSphere',
    'src': 'spheres.svg#prongs',
};

let spheres__waves = {
    'classes': 'svgSphere',
    'src': 'spheres.svg#waves',
};

let spheres__circle = {
    'classes': 'svgSphere',
    'src': 'spheres.svg#circle',
};

let spheres__triangle = {
    'classes': 'svgSphere',
    'src': 'spheres.svg#triangle',
};

let spheres = [
    spheres__prongs,
    spheres__prongs,
    spheres__prongs,
    spheres__prongs,
    spheres__waves,
    spheres__waves,
    spheres__waves,
    spheres__waves,
    spheres__circle,
    spheres__circle,
    spheres__circle,
    spheres__circle,
    spheres__triangle,
    spheres__triangle,
    spheres__triangle,
    spheres__triangle
];

spheres.forEach(sphere => {
    // attribute passing is wrong
    let newElement = document.createElement('img', {
        'src': sphere.src,
        'class': sphere.classes
    });
    document.querySelector('body').appendChild(newElement);
});