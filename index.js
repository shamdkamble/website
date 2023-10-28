let animationStarted = false;
let boatAnimation;

function startAnimation() {
    if (!animationStarted) {
        animationStarted = true;
        boatAnimation = document.querySelector('#boat').style.animation;
        document.querySelector('#boat').style.animation = boatAnimation + ' running';
    }
}

function stopAnimation() {
    if (animationStarted) {
        animationStarted = false;
        document.querySelector('#boat').style.animation = boatAnimation;
    }
}

function showBoat() {
    document.getElementById('dive-in').style.display = 'none';
    document.querySelector('.underwater').style.display = 'block';
    document.querySelector('.boat').style.display = 'block';
    setTimeout(function() {
        document.getElementById('secret-code').style.display = 'block';
    }, 5000);
}

function checkCode() {
    var codeInput = document.getElementById('code-input').value;
    if (codeInput === 'secret') {
        alert('Access granted. Welcome to the Dark Web.');
    } else {
        alert('Access denied. Wrong code.');
    }
}



// Rest of your JavaScript code...
