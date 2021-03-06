var word = document.getElementById('word');
var keyPressListener = new window.keypress.Listener();
var animations = ['noticeMe', 'unhappy', 'happy'];

var setupStory = function() {
    var story = "A man with a broken back sits in a dark room, there's filth on the walls and no one cares. A small window lets a crack of light in from the outside where ash falls from the grey sky. There's the sound of some children crying, their eyes are burning from the soot and chemicals in the air. A mother leans her tired body against a wall and watches them, she lights a cigarette to help drive the death into her quicker. A stream of bright red fires across the sky behind another rocket aiming for another target, to only bring more destruction to an already devastated world. A soldier sits on the ground with his legs crossed and back straight, he wipes the film of dirt off the goggles of his gasmask and hears his own breath inside it. A ball gathers at the back of this throat as he places a hand on his dead comrade and sees a black piano stood, untouched amongst the rubble of a collapsed building. A father lifts slabs of concrete, shifting through the ruins with scarred and torn hands, looking for the bodies of his family, looking for something to drink or to eat. A tear drops from his eye onto the back of his ash coloured hand as he kneels to catch a breath and he quickly licks at it for the moisture.  A general lifts herself out of a tank and clenches her jaw as she surveys the annihilation rained down upon the mass. Someone says something to her, some input about the casualty count, about the overwhelming victory, about the congratulations that will be given. She had a soul once, she was a child once, she was a daughter and an object of affection. She crawls back inside the tank, empty, withdrawn as a filth laden wind howls above the opening before it's slammed shut. A teenage boy sneaks a look out of the crack in the wall and watches the caterpillar tracks crush countless skulls beneath them as it slowly moves away. He turns back and looks into the dark, small space he has made for him and his companion. Looking down there's bits of fur and burnt meat from the dead dog in the corner, and he lifts a piece up to his mouth, chewing on its grey flesh slowly as the girl brings a hand into his but he feels nothing. A woman digs into the flesh underneath her ribs with a bony finger, pulling out necrotic tissue and flinging it across the concrete floor. Crawling on her hands and knees with her last breath, looking with gaunt eyes for something, for someone to tell her that this is just some sort of awful nightmare, that soon she'll wake and be that young girl again. Her arms buckle underneath the pitiful weight of her torso and her face hits the ground, this is the most important moment of her life. On the bridge between here and there, on the cusp of the void, something holds on for seconds longer, moments that spiral into the infinite, one more breath, one more shy input, then, just peace.";
    var story = "A man in a room.";
    var storySplit = story.split('');

    for (var i = 0; i < storySplit.length; i++) {
        var letter = document.createElement('span');
        var letterText = document.createTextNode(storySplit[i]);
        letter.appendChild(letterText);

        if (i == 0) {
            letter.className += "letter current";
        } else if (/^\s+$/.test(storySplit[i])) {
            letter.className += "letter space";
        } else {
            letter.className += "letter";
        }

        word.appendChild(letter);
    }

    animate('noticeMe');
};

var setupNextLetter = function() {
    var currentLetter = word.children[0];
    var currentLetterText = currentLetter.textContent.toLowerCase();

    if (currentLetterText.trim().length === 0) {
        currentLetterText = "space";
    }

    console.log('letter: ' + currentLetterText);

    keyPressListener.reset();
    keyPressListener.simple_combo(currentLetterText, function() {
        progress();
    });
};

var progress = function() {
    var currentLetter = word.children[0];
    var nextLetter = word.children[1];
    var animationName = animations[Math.floor(Math.random()*animations.length)];

    console.log(nextLetter);

    if (typeof nextLetter == 'undefined') {
        animate('goodbye');
        fadeToBlack.restart();
    } else {
        if (nextLetter.classList.contains('space')) {
            console.log('animationName: pulse');
            currentLetter.classList.add('space');
            animate('pulse');
        } else {
            console.log('animationName: ' + animationName);
            currentLetter.classList.remove('space');
            animate(animationName);
        }
        currentLetter.textContent = nextLetter.textContent;

        word.removeChild(nextLetter);
        setupNextLetter();
    }
};

var animate = function(animation) {
    try {
        var currentLetter = word.children[0];
        currentLetter.removeAttribute('style');
        anime.remove(currentLetter);
        window[animation](currentLetter);
    } catch(e) {
        return false;
    }
};


document.addEventListener('DOMContentLoaded', function(event) {
    setupStory();
    setupNextLetter();
});