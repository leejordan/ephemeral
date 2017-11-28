

var goodbye = anime({
    targets: document.getElementById('word').children[1],
    opacity: [
        { value: '0.05', duration: 300, delay: 0, elasticity: 100, easing: 'easeInOutQuad' },
        { value: '1', duration: 1000, delay: 3000, elasticity: 100, easing: 'easeInOutQuad' }
    ],
    scale: [
        { value: '0.6', duration: 300, delay: 0, easing: 'easeInOutQuad' },
        { value: '1', duration: 1000, delay: 3000, easing: 'easeInOutQuad' },
    ]
});

var unhappy = document.getElementById('unhappy').onclick=function(){
    anime({
        targets: document.getElementById('word').children[1],
        color: [
            { value: '#ccc', duration: 200, delay: 0, easing: 'easeInOutQuad' },
            { value: '#eee', duration: 200, delay: 100, easing: 'easeInOutQuad' },
            { value: '#ff9966', duration: 400, delay: 200, elasticity: 100, easing: 'easeInOutQuad' },
            { value: '#000', duration: 3000, delay: 200, elasticity: 100, easing: 'easeInOutQuad' }
        ],
        rotate: [
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '-1', duration: 20, elasticity: 100 },
            { value: '1', duration: 20, elasticity: 100 },
            { value: '0', duration: 20, elasticity: 100 }
        ],
        translateY: [
            { value: '-5%', duration: 1000, easing: 'easeOutElastic', elasticity: 500 },
            { value: '0', duration: 300 }
        ]
    });
};

var happy = document.getElementById('happy').onclick=function(){
    anime({
        targets: document.getElementById('word').children[1],
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
};
