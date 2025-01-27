document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "WEB DEVELOPER",
        "WEB DESIGNER"
    ];
    const typingSpeed = 100;
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    function startTyping() {
        const textContainer = document.querySelector(".typewriter-text");

        if (currentCharIndex < messages[currentTextIndex].length) {
            textContainer.innerHTML += messages[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(startTyping, typingSpeed);
        } else {
            setTimeout(removeText, 1000);
        }
    }

    function removeText() {
        const textContainer = document.querySelector(".typewriter-text");

        if (textContainer.innerHTML.length > 0) {
            textContainer.innerHTML = textContainer.innerHTML.slice(0, -1);
            setTimeout(removeText, 50);
        } else {
            currentTextIndex = (currentTextIndex + 1) % messages.length;
            currentCharIndex = 0;
            setTimeout(startTyping, 500);
        }
    }

    const typewriterContainer = document.querySelector(".typewriter-text");
    if (typewriterContainer) {
        startTyping();
    }

    function toggleMenu() {
        document.querySelector(".dropdown").classList.toggle("active");
    }

    function closeMenu() {
        document.querySelector(".dropdown").classList.remove("active");
    }

    document.addEventListener('DOMContentLoaded', function () {
        const typewriterContainer = document.querySelector(".typewriter-text");
        if (typewriterContainer) {
            startTyping();
        }
    });
});
