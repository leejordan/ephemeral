var startDelay = 8000;

var fadeInBg = anime({
    targets: document.getElementById('body'),
    autoplay: true,
    backgroundColor: [
        { value: '#000', duration: 0, delay: 0, easing: 'easeInOutQuad' },
        { value: '#fff', duration: 6000, delay: 500, easing: 'easeInOutQuad' },
    ]
});

var fadeIn = anime({
    targets: document.getElementById('word'),
    autoplay: true,
    opacity: [
        { value: '0', duration: 500, delay: 3000, easing: 'easeInOutQuad' },
        { value: '1', duration: 4000, delay: 500, easing: 'easeInOutQuad' },
    ]
});

var fadeToBlack = anime({
    targets: document.getElementById('body'),
    autoplay: false,
    backgroundColor: [
        { value: '#fff', duration: 0, delay: 0, easing: 'easeInOutQuad' },
        { value: '#000', duration: 6000, delay: 500, easing: 'easeInOutQuad' },
    ]
});

var goodbye = function(letter) {
    anime({
        targets: letter,
        autoplay: true,
        loop: false,
        opacity: [
            { value: '0', duration: 4000, delay: 0, elasticity: 100, easing: 'easeInOutQuad' }
        ],
        scale: [
            { value: '0', duration: 4000, delay: 0, easing: 'easeInOutQuad' }
        ],
        rotate: [
            { value: '1turn', duration: 3600, delay: 0, easing: 'easeInOutQuad' }
        ]
    });
};

var noticeMe = function(letter) {
    anime({
        targets: letter,
        autoplay: true,
        loop: true,
        color: [
            { value: '#ccc', duration: 200, delay: startDelay, easing: 'easeInOutQuad' },
            { value: '#3333ff', duration: 400, delay: 200, elasticity: 100, easing: 'easeInOutQuad' },
            { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
        ],
        translateY: [
            { value: -20, duration: 400, elasticity: 100, delay: startDelay, easing: 'easeInOutQuad' },
            { value: 0, duration: 200, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
        ],
        scale: [
            { value: '1.05', duration: 100, delay: (startDelay += 400), easing: 'easeInOutQuad' },
            { value: '1', duration: 30, delay: 0, easing: 'easeInOutQuad' },
        ]
    });
};

var unhappy = function(letter) {
    anime({
        targets: letter,
        autoplay: true,
        loop: true,
        color: [
            { value: '#ff9966', duration: 400, delay: startDelay, elasticity: 100, easing: 'easeInOutQuad' },
            { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
        ],
        rotate: [
            { value: '2', duration: 20, elasticity: 100, delay: startDelay },
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
        ]
    });
};

var happy = function(letter) {
    anime({
        targets: letter,
        autoplay: true,
        loop: true,
        color: [
            { value: '#339933', duration: 400, delay: startDelay, elasticity: 100, easing: 'easeInOutQuad' },
            { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
        ],
        scale: [
            { value: '1.1', duration: 400, delay: startDelay },
            { value: '1', duration: 400, delay: 600 },
        ],
        translateY: [
            { value: '-50', duration: 1000, delay: startDelay, easing: 'easeOutElastic', elasticity: 500 },
            { value: '0', duration: 300 }
        ]
    });
};

var pulse = function(letter) {
    anime({
        targets: letter,
        autoplay: true,
        loop: true,
        opacity: [
            { value: '0', duration: 300, delay: startDelay, easing: 'easeInOutQuad' },
            { value: '1', duration: 300, delay: 500, easing: 'easeInOutQuad' },
        ]
    });
};
