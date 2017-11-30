var noticeMe = anime({
    targets: ('.alive'),
    autoplay: false,
    color: [
        { value: '#ccc', duration: 200, delay: 0, easing: 'easeInOutQuad' },
        { value: '#3333ff', duration: 400, delay: 200, elasticity: 100, easing: 'easeInOutQuad' },
        { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
    ],
    translateY: [
        { value: -20, duration: 400, elasticity: 100, delay: 0, easing: 'easeInOutQuad' },
        { value: 0, duration: 200, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
    ],
    scale: [
        { value: '1.05', duration: 100, delay: 400, easing: 'easeInOutQuad' },
        { value: '1', duration: 30, delay: 0, easing: 'easeInOutQuad' },
    ]
});

var goodbye = anime({
    targets: ('.alive'),
    autoplay: false,
    opacity: [
        { value: '0.05', duration: 300, delay: 0, elasticity: 100, easing: 'easeInOutQuad' },
        { value: '1', duration: 1000, delay: 3000, elasticity: 100, easing: 'easeInOutQuad' }
    ],
    scale: [
        { value: '0.6', duration: 300, delay: 0, easing: 'easeInOutQuad' },
        { value: '1', duration: 1000, delay: 3000, easing: 'easeInOutQuad' },
    ]
});

var unhappy = anime({
    targets: ('.alive'),
    autoplay: false,
    color: [
        { value: '#ccc', duration: 200, delay: 0, easing: 'easeInOutQuad' },
        { value: '#eee', duration: 200, delay: 100, easing: 'easeInOutQuad' },
        { value: '#ff9966', duration: 400, delay: 200, elasticity: 100, easing: 'easeInOutQuad' },
        { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
    ],
    rotate: [
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '-2', duration: 20, elasticity: 100 },
        { value: '2', duration: 20, elasticity: 100 },
        { value: '0', duration: 20, elasticity: 100 }
    ],
    translateY: [
        { value: '-5%', duration: 1000, easing: 'easeOutElastic', elasticity: 500 },
        { value: '0', duration: 300 }
    ]
});

var happy = anime({
    targets: ('.alive'),
    autoplay: false,
    color: [
        { value: '#ccc', duration: 200, delay: 0, easing: 'easeInOutQuad' },
        { value: '#eee', duration: 200, delay: 100, easing: 'easeInOutQuad' },
        { value: '#339933', duration: 400, delay: 200, elasticity: 100, easing: 'easeInOutQuad' },
        { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
    ],
    scale: [
        { value: '1.1', duration: 400, delay: 0 },
        { value: '1', duration: 400, delay: 600 },
    ],
    translateY: [
        { value: '-5%', duration: 1000, easing: 'easeOutElastic', elasticity: 500 },
        { value: '0', duration: 300 }
    ]
});
